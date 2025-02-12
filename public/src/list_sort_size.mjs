import { string_size } from "./string_size.mjs";
import { list_sort_map } from "./list_sort_map.mjs";
export function list_sort_size(properties) {
  list_sort_map(properties, string_size);
}
