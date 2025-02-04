import { object_properties } from "./object_properties.mjs";
export function object_merge_generic(from, merge_fn, to) {
  let from_properties = object_properties(from);
  merge_fn(to, from, from_properties);
  return to;
}
