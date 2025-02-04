import { object_merge_properties_strict } from "./object_merge_properties_strict.mjs";
export function object_merge_properties(to, from, properties) {
  let strict = false;
  return object_merge_properties_strict(properties, from, to, strict);
}
