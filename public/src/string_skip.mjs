import { string_size } from "./string_size.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
export function string_skip(input, count) {
  let length = string_size(input);
  assert_boolean(count <= length);
  return input.substring(count);
}
