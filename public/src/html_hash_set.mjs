import { object_property_set } from "./object_property_set.mjs";
import { window_location } from "./window_location.mjs";
export function html_hash_set(value) {
  object_property_set(window_location(), "hash", value);
}
