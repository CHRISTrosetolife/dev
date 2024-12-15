import { app_grocery_main } from "./app_grocery_main.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
import { app_grocery_items } from "./app_grocery_items.mjs";
import { app_todo_item_add } from "./app_todo_item_add.mjs";
import { app_grocery_firebase_path_index } from "./app_grocery_firebase_path_index.mjs";
import { html_item_add } from "./html_item_add.mjs";
import { app_todo_list } from "./app_todo_list.mjs";
export function app_grocery_items_list(context) {
  html_button_back_main(context, app_grocery_main);
  html_item_add(
    context,
    app_grocery_items_list,
    app_grocery_firebase_path_index(),
    on_complete,
  );
  let refresh = () => app_grocery_items_list(context);
  let items = app_grocery_items(context);
  app_todo_list(context, items, refresh);
  function on_complete(value) {
    let items = app_grocery_items(context);
    app_todo_item_add(items, value);
  }
}
