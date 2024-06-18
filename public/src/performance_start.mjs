import { global_get } from "./global_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { performance_next } from "./performance_next.mjs";
export function performance_start(category) {
  let g = global_get();
  object_property_initialize(g, performance_start.name, {});
  let p = {};
  p.times = [];
  performance_next(p);
  return p;
}
