import { performance_next } from "./performance_next.mjs";
export function performance_start() {
  let p = {};
  p.times = [];
  performance_next(p);
  return p;
}
