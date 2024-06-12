import { assert_message_string } from "./assert_message_string.mjs";
import { json_to } from "./json_to.mjs";
export function assert_message(fn, args, message_get) {
  return assert_message_string(fn, args, () => json_to(message_get()));
}
