import { list_reverse } from "./list_reverse.mjs";
import { list_sort } from "./list_sort.mjs";
export function list_sort_reverse(indices) {
  list_sort(indices);
  list_reverse(indices);
}
