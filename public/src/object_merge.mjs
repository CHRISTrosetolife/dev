import { object_merge_properties } from "./object_merge_properties.mjs";
import { object_properties } from "./object_properties.mjs";
export function object_merge(to, from) {
  let merge_fn = object_merge_properties;
  let from_properties = object_properties(from);
  object_merge_properties(to, from, from_properties);
  return to;
}
