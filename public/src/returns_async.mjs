import { returns_message_async } from "./returns_message_async.mjs";
import { json_to } from "./json_to.mjs";
export async function returns_async(fn, expected, args) {
  await returns_message_async(fn, expected, args, () =>
    json_to({
      fn: fn.name,
      expected,
      args,
    }),
  );
}
