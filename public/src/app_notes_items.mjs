import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_notes_items(context) {
  let index = object_property_get(context, "index");
  let items = object_property_initialize(index, "items", []);
  return items;
}
