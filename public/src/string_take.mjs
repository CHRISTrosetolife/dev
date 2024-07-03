import { string_substring } from "./string_substring.mjs";
import { string_length } from "./string_length.mjs";
import { assert_boolean_message } from "./assert_boolean_message.mjs";
export function string_take(input, count) {
  let length = string_length(input);
  assert_boolean_message(count <= length, () => ({
    input,
    count,
    length,
  }));
  return string_substring(input, 0, count);
}
