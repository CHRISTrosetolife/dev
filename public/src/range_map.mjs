import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
export function range_map(count, mapper) {
  return list_map(range(count), mapper);
}
