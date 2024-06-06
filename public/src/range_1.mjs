import { add_1 } from "./add_1.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
export function range_1(count) {
  return list_map(range(count), add_1);
}
