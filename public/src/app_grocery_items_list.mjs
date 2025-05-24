import { app_todo_item_choices } from "./app_todo_item_choices.mjs";
import { html_hr } from "./html_hr.mjs";
import { each } from "./each.mjs";
import { app_todo_properties } from "./app_todo_properties.mjs";
import { app_todo_list_inner } from "./app_todo_list_inner.mjs";
import { app_grocery_index_items } from "./app_grocery_index_items.mjs";
import { app_grocery_main } from "./app_grocery_main.mjs";
import { html_button_back_main } from "./html_button_back_main.mjs";
import { app_todo_item_add } from "./app_todo_item_add.mjs";
import { app_grocery_firebase_path_index } from "./app_grocery_firebase_path_index.mjs";
import { html_item_add } from "./html_item_add.mjs";
export function app_grocery_items_list(context) {
  html_button_back_main(context, app_grocery_main);
  let index_path = app_grocery_firebase_path_index();
  html_item_add(context, app_grocery_items_list, index_path, on_complete);
  let refresh = function () {
    let v = app_grocery_items_list(context);
    return v;
  };
  let items = app_grocery_index_items(context);
  app_todo_list_inner(context, items, refresh, index_path, middle, items);
  function middle(context, item) {
    let properties = app_todo_properties();
    let { root } = context;
    each(properties, function (p) {
      html_hr(root);
      app_todo_item_choices(context, item, p);
    });
  }
  function on_complete(value) {
    let items = app_grocery_index_items(context);
    app_todo_item_add(items, value);
  }
}
