import { each_index_async } from "./each_index_async.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function list_map_index_async(list, mapper) {
  return await list_adder_async(async (la) => {
    await each_index_async(list, async (l, index) => {
      let mapped = mapper(l, index);
      let waited = await mapped;
      la(waited);
    });
  });
}
