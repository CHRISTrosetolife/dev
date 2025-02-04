import { object_merge_generic } from "./object_merge_generic.mjs";
import { object_merge_properties } from "./object_merge_properties.mjs";
export function object_merge_strict(to, from) {
  let merge_fn = object_merge_properties;
  return object_merge_generic(merge_fn, from, to);
}
