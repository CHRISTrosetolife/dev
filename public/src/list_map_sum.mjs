import { list_sum } from "./list_sum.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_sum(list, mapper) {
  let m = list_map(list, mapper);
  return list_sum(m);
}
