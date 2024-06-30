import { list_filter } from "./list_filter.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function list_filter_index(list, filter) {
  let mapped = list_map_index(list, (item, index) => ({
    item,
    index,
  }));
  let filtered = list_filter(mapped, filter);
}
