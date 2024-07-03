import { less_than_equal } from "./less_than_equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { string_substring } from "./string_substring.mjs";
import { string_length } from "./string_length.mjs";
export function string_take(input, count) {
  let length = string_length(input);
  assert_message(less_than_equal, [count, length], () => ({
    input,
    count,
    length,
  }));
  return string_substring(input, 0, count);
}
