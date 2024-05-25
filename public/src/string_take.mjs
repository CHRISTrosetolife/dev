import { string_substring } from "./string_substring.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { string_length } from "./string_length.mjs";
export function string_take(input, count) {
  let length = string_length(input);
  assert_boolean(count <= length);
  return string_substring(input, 0, count);
}
