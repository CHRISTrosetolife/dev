import { returns_message_async } from "./returns_message_async.mjs";
import { assert_message_error } from "./assert_message_error.mjs";
export async function returns_async(fn, expected, args) {
  let message = assert_message_error();
  await returns_message_async(fn, expected, args, message);
}
