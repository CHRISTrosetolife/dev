import { match_filter } from "./match_filter.mjs";
import { each } from "./each.mjs";
export function match_on(mapped, on_match) {
  let filtered = match_filter(mapped);
  each(filtered, on_match);
  return filtered;
}
