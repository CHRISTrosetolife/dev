import { map_properties } from "./map_properties.mjs";
import { list_includes } from "./list_includes.mjs";
export function map_exists(input) {
  return list_includes(map_properties(selected), input);
}
