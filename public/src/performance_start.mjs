import { performance_next } from "./performance_next.mjs";
export function performance_start(category) {
  let p = {};
  p.times = [];
  performance_next(p);
  return p;
}
