import { each_async } from "./each_async.mjs";
import { repeat } from "./repeat.mjs";
import { watch } from "./watch.mjs";
export async function hub() {
  await each_async(list, async (item) => {});
  await repeat(watch);
}
