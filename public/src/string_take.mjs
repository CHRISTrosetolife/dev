import { assert_boolean } from "./assert_boolean.mjs";
import { string_length } from "./string_length.mjs";
export function string_take(input, count) {
  let length = string_length(input);
  assert_boolean(count <= length);
  return input.substring(0, count);
}
