import { noop } from "./noop.mjs";
import { app_todo_list_inner } from "./app_todo_list_inner.mjs";
import { app_notes_items } from "./app_notes_items.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_notes_property_id } from "./app_notes_property_id.mjs";
import { list_sort_string_property } from "./list_sort_string_property.mjs";
import { uuid } from "./uuid.mjs";
import { list_add } from "./list_add.mjs";
import { html_item_add } from "./html_item_add.mjs";
import { app_notes_firebase_path_index } from "./app_notes_firebase_path_index.mjs";
export function app_notes_main(context) {
  let { root } = context;
  html_clear_scroll_top(root);
  let index_path = app_notes_firebase_path_index();
  html_item_add(context, app_notes_main, index_path, on_complete);
  async function on_complete(value) {
    let items = app_notes_items(context);
    list_add(items, {
      name: value,
      [app_notes_property_id()]: await uuid(),
    });
    list_sort_string_property(items, app_notes_property_id());
  }
  let items = app_notes_items(context);
  app_todo_list_inner(context, items, app_notes_main, index_path, noop, items);
}
