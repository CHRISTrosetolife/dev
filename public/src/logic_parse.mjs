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
      let c = string_get(i);
      if (string_letters_is(c)) {
        identifier = string_combine(identifier, c);
      } else if (c === "(") {
        result = {
          name: identifier,
          type: "function",
          args: [],
        };
      } else if (c === ")") {
        return result;
      }
    }
  }
}
