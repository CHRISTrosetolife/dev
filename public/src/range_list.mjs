import { list_size } from "./list_size.mjs";
import { range } from "./range.mjs";
export function range_list(list) {
  return range(list_size(list));
}
