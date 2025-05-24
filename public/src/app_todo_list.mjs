import { app_todo_item_choices } from "./app_todo_item_choices.mjs";
import { html_hr } from "./html_hr.mjs";
import { each } from "./each.mjs";
import { app_todo_properties } from "./app_todo_properties.mjs";
import { app_todo_list_inner } from "./app_todo_list_inner.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
export function app_todo_list(context, filtered, refresh, items_all) {
  app_todo_list_inner(
    context,
    filtered,
    refresh,
    app_todo_firebase_path_index,
    middle,
    items_all,
  );
  function middle(context, item) {
    let properties = app_todo_properties();
    let { root } = context;
    each(properties, function (p) {
      html_hr(root);
      app_todo_item_choices(context, item, p);
    });
  }
}
