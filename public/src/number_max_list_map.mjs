import { list_map } from "./list_map.mjs";
export function number_max_list_map(list, mapper) {
  let mapped = list_map(list, mapper);
  return Math.max(...mapped);
}
