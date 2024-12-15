import { tautology } from "./tautology.mjs";
import { app_todo_list } from "./app_todo_list.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function app_todo_list_filtered(
  context,
  items,
  property_name,
  value,
  refresh,
) {
  let filtered = list_filter_property(items, property_name, value);
  app_todo_list(context, filtered, refresh, tautology);
}
