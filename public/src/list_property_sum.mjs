import { object_property_get } from "./object_property_get.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export function list_property_sum(lines, property_name) {
  return list_map_sum(lines, (line) =>
    object_property_get(line, property_name),
  );
}
