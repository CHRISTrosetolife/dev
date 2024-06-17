import { object_merge_properties } from "./object_merge_properties.mjs";
export function object_map(w, properties) {
  return object_merge_properties({}, w, properties);
}
