import { range } from "./range.mjs";
import { each_async } from "./each_async.mjs";
export async function each_range_async(count, lambda) {
  await each_async(range(count), lambda);
}
