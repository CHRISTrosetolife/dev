import { json_to } from "./json_to.mjs";
export function assert_message_json(fn, args, message_get) {
  return assert_message_json(fn, args, () => json_to(message_get()));
}
