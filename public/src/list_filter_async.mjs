import { each_async } from "./each_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function list_filter_async(list, filter) {
  return await list_adder_async(async (la) => {
    each_async(list, async (item) => {
      if (await filter(item)) {
        la(item);
      }
    });
  });
}
