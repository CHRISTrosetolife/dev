import { string_size } from "./string_size.mjs";
import { string_skip } from "./string_skip.mjs";
export function string_take_reverse(input, count) {
  return string_skip(input, string_size(input) - count);
}
