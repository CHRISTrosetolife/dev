import { identity } from "./identity.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
export function list_sort_string(list) {
  list_sort_string_map(list, identity);
}
