import { each_async } from "./each_async.mjs";
export async function promise_all_ordered(promises) {
  await each_async(promises, async (promise) => {
    await promise();
  });
}
