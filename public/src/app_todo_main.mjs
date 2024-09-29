import { noop } from "./noop.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { app_todo_items } from "./app_todo_items.mjs";
import { each } from "./each.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { list_add } from "./list_add.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export async function app_todo_main(context) {
  let { root, index } = context;
  html_clear_scroll_top(root);
  let items = app_todo_items(context);
  html_button_width_full_text_click(root, "➕ add", () => {
    html_clear_scroll_top(root);
    html_button_width_full_text_click_back(root, async () => {
      await app_todo_main(context);
    });
    let input = html_input_width_full_focus(root);
    html_button_width_full_text_click(root, "➕ add", async () => {
      let value = html_value_get(input);
      list_add(items, value);
      let index_path = app_todo_firebase_path_index();
      await firebase_upload_object(index_path, index);
      await app_todo_main(context);
    });
  });
  html_hr(root);
  each(items, (item) => {
    html_button_width_full_text_click(root, item, noop);
  });
}
