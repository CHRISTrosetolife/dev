import { log } from "./log.mjs";
import { string_length } from "./string_length.mjs";
export function logic_parse(input) {
  let length = string_length(input);
  for (let c of input) {
    console.log(c);
  }
}
