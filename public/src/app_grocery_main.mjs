import { app_todo_list } from "./app_todo_list.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_todo_not_completed } from "./app_todo_not_completed.mjs";
import { app_todo_completed_property } from "./app_todo_completed_property.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { html_item_add } from "./html_item_add.mjs";
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
  let refresh = () => app_todo_main(context);
  let add_item = string_add_item();
  let value_initial = "";
  html_item_add(
    context,
    add_item,
    app_todo_main,
    value_initial,
    add_item,
    on_complete,
    app_todo_firebase_path_index(),
    refresh,
  );
  let a = app_todo_completed_property();
  let b = app_todo_not_completed();
  let { root2 } = context;
  html_hr(root2);
  let filtered = list_filter_property(items, a, b);
  app_todo_list(context, filtered, refresh);
}
