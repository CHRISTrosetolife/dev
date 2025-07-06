import { each } from "./each.mjs";
export function match_on(match_fn, on_match) {
  let v = function (a) {
    a = match_fn(a);
    each(filtered, on_match);
  };
  return v;
}
