import { app_todo_list } from "./app_todo_list.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { html_hr } from "./html_hr.mjs";
export function app_todo_list_filtered(
  context,
  items,
  property_name,
  value,
  refresh,
) {
  let { root } = context;
  html_hr(root);
  let filtered = list_filter_property(items, property_name, value);
  app_todo_list(filtered, context, refresh);
}
