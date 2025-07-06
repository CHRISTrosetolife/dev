import { each } from "./each.mjs";
export function match_on(match_fn, on_match) {
  let v = function match_on_inner(a) {
    a = match_fn(a);
    each(a, on_match);
  };
  return v;
}
