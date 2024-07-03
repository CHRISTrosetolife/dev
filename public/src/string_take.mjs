import { string_substring } from "./string_substring.mjs";
import { string_length } from "./string_length.mjs";
export function string_take(input, count) {
  let length = string_length(input);
  assert_boolean_message_json(count <= length, () => ({
    input,
    count,
    length,
  }));
  return string_substring(input, 0, count);
}
