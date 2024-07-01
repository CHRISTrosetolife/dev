import { list_map } from "./list_map.mjs";
export function list_map_nested(list_of_lists, mapper) {
  return list_map(list_of_lists, (list) => list_map(list, mapper));
}
