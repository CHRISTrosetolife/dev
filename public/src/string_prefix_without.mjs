import { string_size } from "./string_size.mjs";
import { string_skip } from "./string_skip.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function string_prefix_without(input, prefix) {
  assert_boolean(string_starts_with(input, prefix));
  let prefix_length = string_size(prefix);
  return string_skip(input, prefix_length);
}
