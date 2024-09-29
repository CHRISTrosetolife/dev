import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { list_add } from "./list_add.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export async function app_todo_main(context) {
  let { root, index } = context;
  html_clear_scroll_top(root);
  html_button_width_full_text_click(root, "➕ add", () => {
    html_clear_scroll_top(root);
    let input = html_input_width_full_focus(root);
    html_button_width_full_text_click(root, "➕ add", async () => {
      let items = object_property_initialize(index, "items", []);
      let value = html_value_get(input);
      list_add(items, value);
      let index_path = app_todo_firebase_path_index();
      await firebase_upload_object(index_path, index);
      await app_todo_main(context);
    });
  });
}
