import { list_size } from "./list_size.mjs";
import { range } from "./range.mjs";
export function list_indices(parts) {
  return range(list_size(parts));
}
