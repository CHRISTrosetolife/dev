import { object_merge_properties_generic } from "./object_merge_properties_generic.mjs";
export function object_merge_properties(to, from, properties) {
  let strict = false;
  return object_merge_properties_generic(properties, from, to, strict);
}
