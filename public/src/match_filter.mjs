import { list_filter_property } from "./list_filter_property.mjs";
export function match_filter(mapped) {
  return list_filter_property(mapped, "match", true);
}
