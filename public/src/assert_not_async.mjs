import { assert_not_message_async } from "./assert_not_message_async.mjs";
import { assert_message_error } from "./assert_message_error.mjs";
export async function assert_not_async(fn, args) {
  let message = assert_message_error();
  await assert_not_message_async(fn, args, message);
}
