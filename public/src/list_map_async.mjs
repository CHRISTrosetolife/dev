import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
export async function list_map_async(list, mapper) {
  let result = [];
  await each_async(list, async (l) => {
    let mapped = mapper(l);
    let waited = await mapped;
    list_add(result, waited);
  });
  return result;
}
