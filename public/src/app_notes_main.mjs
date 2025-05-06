import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { log } from "./log.mjs";
import { app_notes_property_id } from "./app_notes_property_id.mjs";
import { list_sort_string_property } from "./list_sort_string_property.mjs";
import { uuid } from "./uuid.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_item_add } from "./html_item_add.mjs";
import { app_notes_firebase_path_index } from "./app_notes_firebase_path_index.mjs";
export function app_notes_main(context) {
  html_clear_scroll_top(root);
  let index_path = app_notes_firebase_path_index();
  html_item_add(context, app_notes_main, index_path, on_complete);
  async function on_complete(value) {
    let index = object_property_get(context, "index");
    let items = object_property_initialize(index, "items", []);
    log({
      items,
    });
    list_add(items, {
      name: value,
      [app_notes_property_id()]: await uuid(),
    });
    list_sort_string_property(items, app_notes_property_id());
    log({
      items,
    });
  }
}
