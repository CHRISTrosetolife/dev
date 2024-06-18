import { object_merge_properties } from "./object_merge_properties.mjs";
export function object_properties_new(object, properties) {
  return object_merge_properties({}, object, properties);
}
