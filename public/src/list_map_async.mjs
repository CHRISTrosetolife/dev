import { promise_all } from "./promise_all.mjs";
import { list_map } from "./list_map.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
export async function list_map_async(list, mapper) {
  let p = list_map(list, mapper);
  let a = await promise_all(p);
  return a;
  return await list_adder_async(async (la) => {
    await each_async(list, async (l) => {
      let mapped = mapper(l);
      let waited = await mapped;
      la(waited);
    });
  });
}
