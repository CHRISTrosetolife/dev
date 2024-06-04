import { returns_message } from "./returns_message.mjs";
import { json_to } from "./json_to.mjs";
export function returns(fn, expected, args) {
  returns_message(fn, expected, args, message_get);
  function message_get() {
    return json_to(args);
  }
}
