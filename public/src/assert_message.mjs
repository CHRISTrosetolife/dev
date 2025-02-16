import { string_size } from "./string_size.mjs";
import { assert_message_string } from "./assert_message_string.mjs";
import { json_to } from "./json_to.mjs";
import { string_take } from "./string_take.mjs";
export function assert_message(fn, args, message_get) {
  let v = assert_message_string(fn, args, function () {
    let j = json_to(message_get());
    let limit = 1000;
    if (string_size(j) > limit) {
      let v2 = string_take(j, limit);
      return v2;
    }
    return j;
  });
  return v;
}
