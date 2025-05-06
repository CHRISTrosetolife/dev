import { list_sort_string_property } from "./list_sort_string_property.mjs";
import { uuid } from "./uuid.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { html_item_add } from "./html_item_add.mjs";
import { app_notes_firebase_path_index } from "./app_notes_firebase_path_index.mjs";
export function app_notes_main(context) {
  let index_path = app_notes_firebase_path_index();
  html_item_add(context, app_todo_main, index_path, on_complete);
  async function on_complete(value) {
    let index = object_property_get(context, "index");
    list_add(index, {
      name: value,
      id: await uuid(),
    });
    list_sort_string_property(index, "id");
  }
}
