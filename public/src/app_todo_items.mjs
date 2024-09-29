import { object_property_initialize } from "./object_property_initialize.mjs";
export function app_todo_items(context) {
  let { index } = context;
  let items = object_property_initialize(index, "items", []);
  return items;
}
