import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { equal_0 } from "./equal_0.mjs";
import { log } from "./log.mjs";
import { add_1 } from "./add_1.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { list_add } from "./list_add.mjs";
import { number_less_than } from "./number_less_than.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_get } from "./string_get.mjs";
import { string_length } from "./string_length.mjs";
import { string_letters_is } from "./string_letters_is.mjs";
export function logic_parse(input) {
  let index = 0;
  let r = logic_parse_recursive(input, index);
  let { result, next } = r;
  console.log({
    input,
    r,
  });
  assert(equal, [next, string_length(input)]);
  return result;
  function logic_parse_recursive(input, index) {
    console.log({
      input,
      index,
    });
    let open = false;
    let result;
    let identifier = "";
    while (number_less_than(index, string_length(input))) {
      let c = string_get(input, index);
      console.log({
        c,
      });
      if (string_letters_is(c)) {
        identifier = string_combine(identifier, c);
        index = add_1(index);
      } else if (c === "(" || c === ",") {
        if (c === "(") {
          open = true;
          result = {
            type: "function",
            name: identifier,
            args: [],
          };
        }
        let { args } = result;
        let r = logic_parse_recursive(input, add_1(index));
        console.log({
          r,
        });
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
        assert(equal_0, [string_length(identifier)]);
        return {
          result: {
            type: "empty",
          },
          next: index,
        };
      }
    }
    assert(not, [open]);
    assert(greater_than_equal, [string_length(identifier), 1]);
    return {
      result: {
        type: "variable",
      },
      next: index,
    };
  }
}
