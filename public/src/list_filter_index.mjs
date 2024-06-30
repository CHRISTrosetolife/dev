import { list_map } from "./list_map.mjs";
export function list_filter_index(list, filter) {
  let mapped = list_map(list, () => {});
  return list.filter((item, index) => filter(item, index));
}
