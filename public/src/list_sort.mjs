import { identity } from "./identity.mjs";
import { list_sort_map } from "./list_sort_map.mjs";
export function list_sort(indices) {
  list_sort_map(indices, identity);
}
