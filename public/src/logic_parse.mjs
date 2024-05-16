import { add_1 } from "./add_1.mjs";
import { error } from "./error.mjs";
import { list_add } from "./list_add.mjs";
import { number_less_than } from "./number_less_than.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_get } from "./string_get.mjs";
import { string_length } from "./string_length.mjs";
import { string_letters_is } from "./string_letters_is.mjs";
export function logic_parse(input) {
  let index = 0;
  return logic_parse_recursive(input, index)
  function logic_parse_recursive(input, index) {
    let result;
    let identifier = "";
    while (number_less_than(index, string_length(input))) {
      let c = string_get(input, index);
      if (string_letters_is(c)) {
        identifier = string_combine(identifier, c);
      } else if (c === "(") {
        let args = []
        result = {
          name: identifier,
          type: "function",
          args,
        };
        let r = logic_parse_recursive(input, add_1(index))
        let {result:child} =r;
        list_add(args,child)
        let {next} = r;
        index = next
      } else if (c === ")") {
        return {result,next:add_1(index)};
      }
      index = add_1(index)
    }
    error()
  }
}
