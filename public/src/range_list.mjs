import { list_size } from "./list_size.mjs";
import { range } from "./range.mjs";
export function range_list(atom) {
  return range(list_size(atom));
}
