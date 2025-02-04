import { identity } from "./identity.mjs";
import { list_sort_string_map } from "./list_sort_string_map.mjs";
export function list_sort_string(taken) {
  list_sort_string_map(taken, identity);
}
