import { list_sort_map } from "./list_sort_map.mjs";
export function list_sort_property(pairs, property) {
  list_sort_map(pairs, (p) => p[property]);
}
