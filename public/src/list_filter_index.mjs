import { list_filter } from "./list_filter.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function list_filter_index(list, filter) {
  let mapped = list_map_index(list, (item, index) => ({
    item,
    index,
  }));
  let filtered = list_filter(mapped, (m) => filter(m.item));
  return list_map_property(filtered, "index");
}
