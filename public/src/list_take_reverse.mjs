import { string_length } from "./string_length.mjs";
import { string_skip } from "./string_skip.mjs";
export function list_take_reverse(input, count) {
  return string_skip(input, string_length(input) - count);
}
