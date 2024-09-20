import { string_size } from "./string_size.mjs";
import { logic_parse_identifier } from "./logic_parse_identifier.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { equal_0 } from "./equal_0.mjs";
import { log } from "./log.mjs";
import { add_1 } from "./add_1.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { number_less_than } from "./number_less_than.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_get } from "./string_get.mjs";
import { string_letters_is } from "./string_letters_is.mjs";
export function logic_parse(input) {
  let index = 0;
  let r = logic_parse_recursive(input, index);
  let { result, next } = r;
  assert(equal, [next, string_size(input)]);
  return result;
  function logic_parse_recursive(input, index) {
    let open = false;
    let result;
    let identifier = "";
    while (number_less_than(index, string_size(input))) {
      let c = string_get(input, index);
      if (string_letters_is(c)) {
        identifier = string_combine(identifier, c);
        index = add_1(index);
      } else if (c === "(" || c === ",") {
        if (c === "(") {
          open = true;
          result = {
            type: "call",
            callee: logic_parse_identifier(identifier),
            args: [],
          };
        }
        if (not(open)) {
          return {
            result: logic_parse_identifier(identifier),
            next: index,
          };
        }
        let { args } = result;
        let r = logic_parse_recursive(input, add_1(index));
        let { result: child } = r;
        let { type: child_type } = child;
        if (child_type !== "empty") {
          list_add(args, child);
        }
        let { next } = r;
        index = next;
      } else if (c === ")") {
        if (open) {
          return {
            result,
            next: add_1(index),
          };
        }
        if (equal_0(string_size(identifier))) {
          return {
            result: {
              type: "empty",
            },
            next: index,
          };
        }
        return {
          result: logic_parse_identifier(identifier),
          next: index,
        };
      }
    }
    assert(not, [open]);
    assert(greater_than_equal, [string_size(identifier), 1]);
    return {
      result: logic_parse_identifier(identifier),
      next: index,
    };
  }
}
