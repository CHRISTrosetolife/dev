import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_grocery_items } from "./app_grocery_items.mjs";
import { app_todo_item_add } from "./app_todo_item_add.mjs";
import { app_grocery_firebase_path_index } from "./app_grocery_firebase_path_index.mjs";
import { html_item_add } from "./html_item_add.mjs";
import { app_todo_list } from "./app_todo_list.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_grocery_main(context) {
  let root = object_property_get(context, "root");
  html_clear_scroll_top(root);
  html_item_add(
    context,
    app_grocery_main,
    app_grocery_firebase_path_index(),
    on_complete,
  );
  let refresh = () => app_grocery_main(context);
  let items = app_grocery_items(context);
  app_todo_list(context, items, refresh);
  function on_complete(value) {
    let items = app_grocery_items(context);
    app_todo_item_add(items, value);
  }
}
