import { returns_message_async } from "./returns_message_async.mjs";
import { assert_message_error } from "./assert_message_error.mjs";
export async function assert_not_async(fn, args) {
  let message = assert_message_error();
  await returns_message_async(fn, args, expected, message);
}
