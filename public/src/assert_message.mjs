import { string_take_soft } from "./string_take_soft.mjs";
import { assert_message_string } from "./assert_message_string.mjs";
import { json_to } from "./json_to.mjs";
export function assert_message(fn, args, message_get) {
  let v = assert_message_string(fn, args, function () {
    let j = json_to(message_get());
    let limit = 1000;
    let v2 = string_take_soft(j, limit);
    return v2;
  });
  return v;
}
