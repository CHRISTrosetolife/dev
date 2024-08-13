import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
export async function list_map_async(list, mapper) {
  return await list_adder_async(async (la) => {
    await each_async(list, async (l) => {
      let mapped = mapper(l);
      let waited = await mapped;
      list_add(result, waited);
    });
  });
}
