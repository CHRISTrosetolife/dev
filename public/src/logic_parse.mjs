import { string_combine } from "./string_combine.mjs";
import { string_letters_is } from "./string_letters_is.mjs";
export function logic_parse(input) {
  let result;
  let identifier = "";
  for (let c of input) {
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
