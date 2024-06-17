import { list_sort } from "./list_sort.mjs";
export function list_sort_property(pairs, property) {
  list_sort(pairs, (p) => p[property]);
}
