import { object_merge_properties_strict } from "./object_merge_properties_strict.mjs";
import { object_merge_generic } from "./object_merge_generic.mjs";
export function object_merge_strict(to, from) {
  let merge_fn = object_merge_properties_strict;
  return object_merge_generic(merge_fn, from, to);
}
