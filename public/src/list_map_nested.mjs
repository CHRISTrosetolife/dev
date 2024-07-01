import { list_map } from "./list_map.mjs";
export function list_map_nested(list, mapper) {
  return list_map(list, (a) => list_map(a, mapper));
}
