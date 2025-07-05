import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function match_on(mapped, on_match) {
  let filtered = list_filter_property(mapped, "match", true);
  each(filtered, on_match);
  log({
    filtered,
    on_match,
  });
  return filtered;
}
