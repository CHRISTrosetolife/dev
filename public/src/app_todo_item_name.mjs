import { html_item_add_generic } from "./html_item_add_generic.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
export function app_todo_item_name(
  context,
  button_text_first,
  button_text_second,
  value_initial,
  on_complete,
  on_save,
) {
  let app_main_lambda = app_todo_main;
  let index_path = app_todo_firebase_path_index();
  html_item_add_generic(
    context,
    button_text_first,
    app_main_lambda,
    value_initial,
    button_text_second,
    on_complete,
    index_path,
    on_save,
  );
}
