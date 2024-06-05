import { returns_message } from "./returns_message.mjs";
export function assert_message_json(fn, args, message_get) {
  returns_message(fn, true, args, message_get);
}
