import { performance_next } from "./performance_next.mjs";
export function performance_start(function_name) {
  let p = {};
  p.times = [];
  performance_next(p);
  return p;
}
