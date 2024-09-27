import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
export async function list_map_unordered(list, mapper) {
  let p = list_map(list, mapper);
  let a = await list_wait(p);
  return a;
}
