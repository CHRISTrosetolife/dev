import { performance_start_categories } from "./performance_start_categories.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { performance_next } from "./performance_next.mjs";
export function performance_start(category) {
  let categories = performance_start_categories();
  let ps = object_property_initialize(categories, category, []);
  let p = [];
  list_add(ps, p);
  p.times = [];
  performance_next(p);
  return p;
}
