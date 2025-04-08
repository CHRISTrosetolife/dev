import { less_than } from "./less_than.mjs";
export function less_than_by(a, b, mapper) {
  let v = less_than(mapper(a), mapper(b));
  return v;
}
