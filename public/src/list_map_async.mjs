import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
export async function list_map_async(list, mapper) {
  let result = [];
  each(list2, (item) => {});
  for (let l of list) {
    let mapped = mapper(l);
    let waited = await mapped;
    list_add(result, waited);
  }
  return result;
}
