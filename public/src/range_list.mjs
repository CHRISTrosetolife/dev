import { list_length } from "./list_length.mjs";
import { range } from "./range.mjs";
export function range_list(atom) {
  return range(list_length(atom));
}
