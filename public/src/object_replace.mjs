import { object_property_delete_all } from "./object_property_delete_all.mjs";
import { object_merge } from "./object_merge.mjs";
export function object_replace(original, replacement) {
  object_property_delete_all(original);
  object_merge(original, replacement);
}
