import { performance_start } from "./performance_start.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export function performance_start_categories() {
  let g = global_get();
  let categories = object_property_initialize(g, performance_start.name, {});
  return categories;
}
