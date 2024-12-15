import { html_item_add_generic } from "./html_item_add_generic.mjs";
import { app_todo_list } from "./app_todo_list.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { string_add_item } from "./string_add_item.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { json_to } from "./json_to.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export function app_grocery_main(context) {
  let root = object_property_get(context, "root");
  let index = object_property_get(context, "index");
  html_p_text(root, json_to(index));
  let items = object_property_initialize(index, "items", []);
  let app_main_lambda = app_todo_main;
  let index_path = app_todo_firebase_path_index();
  let add_item = string_add_item();
  let refresh = () => app_main_lambda(context);
  let value_initial = "";
  html_item_add_generic(
    context,
    add_item,
    app_main_lambda,
    value_initial,
    add_item,
    on_complete,
    index_path,
    refresh,
  );
  app_todo_list(context, items, refresh);
}
