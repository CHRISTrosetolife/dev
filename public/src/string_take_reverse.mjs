import { assert_boolean } from "./assert_boolean.mjs";
import { string_length } from "./string_length.mjs";
import { string_skip } from "./string_skip.mjs";
export function string_take_reverse(input, count) {
  let length = string_length(input);
  assert_boolean(count <= length);
  return string_skip(input, length - count);
}
