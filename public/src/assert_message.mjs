import { assert_message_string } from "./assert_message_string.mjs";
import { json_to } from "./json_to.mjs";
import { string_length } from "./string_length.mjs";
import { string_take } from "./string_take.mjs";
export function assert_message(fn, args, message_get) {
  return assert_message_string(fn, args, () => {
    let j = json_to(message_get());
    let limit = 1000;
    if (string_length(j > limit)) {
      return string_take(j, limit);
    }
    return j;
  });
}
