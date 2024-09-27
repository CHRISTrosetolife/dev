import { promise_all } from "./promise_all.mjs";
import { list_map } from "./list_map.mjs";
export async function list_map_unordered(list, mapper) {
  let p = list_map(list, mapper);
  let a = await promise_all(p);
  return a;
}
