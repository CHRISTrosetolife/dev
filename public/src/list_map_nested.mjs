import { list_map } from "./list_map.mjs";
export function list_map_nested(atom_i, mapper) {
  return list_map(atom_i, (a) => list_map(a, mapper));
}
