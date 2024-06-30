import { list_map_index } from "./list_map_index.mjs";
export function list_filter_index(list, filter) {
  let mapped = list_map_index(list, () => {});
  return list.filter((item, index) => filter(item, index));
}
