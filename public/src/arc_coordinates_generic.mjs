import { list_sort_map } from "./list_sort_map.mjs";
import { identity } from "./identity.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
export function arc_coordinates_generic(coordinates, property) {
  let xs = list_unique(list_map_property(coordinates, property));
  list_sort_map(xs, identity);
  return xs;
}
