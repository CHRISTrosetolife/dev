import { returns_async } from "./returns_async.mjs";
export async function assert_async(fn, args) {
  await returns_async(fn, true, args);
}
