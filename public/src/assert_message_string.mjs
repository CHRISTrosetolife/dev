import { returns_message } from "./returns_message.mjs";
export function assert_message_string(fn, args, message_get) {
  returns_message(fn, true, args, message_get);
}
