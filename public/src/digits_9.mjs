import { list_map_string } from "./list_map_string.mjs";
import { range } from "./range.mjs";
export function digits_9() {
  let d = range(10);
  let v = list_map_string(d);
  return v;
}
