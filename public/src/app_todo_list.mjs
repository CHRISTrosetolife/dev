import { app_todo_list_generic } from "./app_todo_list_generic.mjs";
import { app_todo_properties } from "./app_todo_properties.mjs";
export function app_todo_list(context, filtered, refresh) {
  let properties = app_todo_properties();
  app_todo_list_generic(context, filtered, refresh, properties);
}
