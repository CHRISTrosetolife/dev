import { assert_not_message_async } from "./assert_not_message_async.mjs";
import { assert_message_error } from "./assert_message_error.mjs";
export async function assert_not_async(fn, args) {
  await assert_not_message_async(fn, args, assert_message_error);
}
