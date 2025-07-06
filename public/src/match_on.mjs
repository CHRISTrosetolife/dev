import { match_filter } from "./match_filter.mjs";
import { each } from "./each.mjs";
export function match_on(match_fn, on_match) {
  let v = function (a) {
    a = match_fn(a);
  };
  return v;
  let filtered = match_filter(mapped);
  each(filtered, on_match);
  return filtered;
}
