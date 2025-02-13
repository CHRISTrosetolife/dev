import { map_properties } from "./map_properties.mjs";
import { list_size } from "./list_size.mjs";
export function map_size(selected) {
  return list_size(map_properties(selected));
}
