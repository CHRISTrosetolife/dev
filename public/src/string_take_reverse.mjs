import { string_skip } from "./string_skip.mjs";
export function string_take_reverse(input, count) {
  return string_skip(input, length - count);
}
