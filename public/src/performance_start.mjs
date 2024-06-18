import { global_get } from "./global_get.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { performance_next } from "./performance_next.mjs";
export function performance_start(category) {
  let g = global_get();
  let categories = object_property_initialize(g, performance_start.name, {});
  let ps = object_property_initialize(categories, category, []);
  let p = {};
  list_add(ps, p);
  p.times = [];
  performance_next(p);
  return p;
}
