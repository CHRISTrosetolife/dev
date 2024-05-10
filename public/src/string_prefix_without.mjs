import { string_length } from "./string_length.mjs";
import { string_skip } from "./string_skip.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function string_prefix_without(input, prefix) {
  assert_boolean(string_starts_with(input, prefix));
  let prefix_length = string_length(prefix);
  return string_skip(input, prefix_length);
}
