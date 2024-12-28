import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_grocery_index_need(context) {
  let index = object_property_get(context, "index");
  let items = object_property_initialize(index, "need", {});
  return items;
}
