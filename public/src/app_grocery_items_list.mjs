import { app_grocery_index_items } from "./app_grocery_index_items.mjs";
import { app_todo_list_generic } from "./app_todo_list_generic.mjs";
import { app_grocery_main } from "./app_grocery_main.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
import { app_todo_item_add } from "./app_todo_item_add.mjs";
import { app_grocery_firebase_path_index } from "./app_grocery_firebase_path_index.mjs";
import { html_item_add } from "./html_item_add.mjs";
export function app_grocery_items_list(context) {
  html_button_back_main(context, app_grocery_main);
  let index_path = app_grocery_firebase_path_index();
  html_item_add(context, app_grocery_items_list, index_path, on_complete);
  let refresh = () => app_grocery_items_list(context);
  let items = app_grocery_index_items(context);$ex 
  app_todo_list_generic(context, items, refresh, index_path, items);
  function on_complete(value) {
    let items = app_grocery_index_items(context);
    app_todo_item_add(items, value);
  }
}
