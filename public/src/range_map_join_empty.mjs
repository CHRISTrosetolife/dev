import { range_map } from "./range_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function range_map_join_empty(count, mapper) {
  return list_join_empty(range_map(count, mapper));
}
