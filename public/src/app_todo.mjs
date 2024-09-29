import { html_input_width_full_focus } from "./html_input_width_full_focus.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_todo_firebase_path_combine } from "./app_todo_firebase_path_combine.mjs";
import { firebase_download } from "./firebase_download.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_todo_firebase_path } from "./app_todo_firebase_path.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { log } from "./log.mjs";
import { firebase_list } from "./firebase_list.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export async function app_todo() {
  await app_firebase(async (context) => {
    let { root } = context;
    html_clear_scroll_top(root);
    let index = app_todo_firebase_path_combine("index.json");
    let { items: firebase_items } = await firebase_list(
      app_todo_firebase_path(),
    );
    let full_paths = list_map_property(firebase_items, "fullPath");
    if (!list_includes(full_paths, index)) {
      await firebase_upload_object(index, {});
    }
    let d = await firebase_download(index);
    html_button_width_full_text_click(root, "➕ add", () => {
      html_clear_scroll_top(root);
      html_input_width_full_focus(root);
      html_button_width_full_text_click(root, "➕ add", () => {
        let items = object_property_initialize(d, "items", []);
      });
    });
    log({
      d,
    });
  });
}
