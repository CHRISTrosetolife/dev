import { keyboard_near_lookup } from "./keyboard_near_lookup.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function keyboard_near(a, b) {
  list_includes(object_property_get(keyboard_near_lookup(), a), b);
}
