import { app_todo_not_completed } from "./app_todo_not_completed.mjs";
import { app_todo_completed_property } from "./app_todo_completed_property.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function app_todo_command_items_filter(items) {
  return list_filter_property(
    items,
    app_todo_completed_property(),
    app_todo_not_completed(),
  );
}
