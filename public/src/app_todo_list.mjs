import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { app_todo_list_generic } from "./app_todo_list_generic.mjs";
import { app_todo_properties } from "./app_todo_properties.mjs";
export function app_todo_list(context, filtered, refresh, items_all) {
  let properties = app_todo_properties();
  app_todo_list_generic(
    context,
    filtered,
    refresh,
    app_todo_firebase_path_index(),
    items_all,
  );
}
