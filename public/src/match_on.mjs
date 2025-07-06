import { each } from "./each.mjs";
import { match_filter } from "./match_filter.mjs";
export function match_on(match_fn, on_match) {
  let v = function match_on_inner(a) {
    a = match_fn(a);
    let filtered = match_filter(a);
    each(filtered, on_match);
    let v2 = a;
    return v2;
  };
  return v;
}
