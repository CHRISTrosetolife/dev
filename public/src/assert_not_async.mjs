import { json_to } from "./json_to.mjs";
import { assert_not_message_async } from "./assert_not_message_async.mjs";
export async function assert_not_async(fn, args) {
  await assert_not_message_async(fn, args, () =>
    json_to({
      fn: fn.name,
      args,
    }),
  );
}
