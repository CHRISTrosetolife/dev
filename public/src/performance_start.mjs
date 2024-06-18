import { global_get } from "./global_get.mjs";
import { performance_next } from "./performance_next.mjs";
export function performance_start(category) {
  let g = global_get();
  let p = {};
  p.times = [];
  performance_next(p);
  return p;
}
