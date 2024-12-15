import { app_todo_list } from "./app_todo_list.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function app_todo_list_filtered(
  context,
  items,
  property_name,
  value,
  refresh,
) {
  app_todo_list(context, items, refresh, (items) =>
    list_filter_property(items, property_name, value),
  );
}
