import { returns_message_async } from "./returns_message_async.mjs";
export async function assert_not_message_async(fn, args, message) {
  await returns_message_async(fn, false, args, message);
}
