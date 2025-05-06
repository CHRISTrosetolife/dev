import { html_item_add } from "./html_item_add.mjs";
import { app_firebase_path_index } from "./app_firebase_path_index.mjs";
import { path_join } from "./path_join.mjs";
import { firebase_storage_initialize_context } from "./firebase_storage_initialize_context.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { html_button_add } from "./html_button_add.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_notes() {
  let root = html_style_default_initialize();
  html_button_add(root, "note");
  await app_firebase({
    on_logged_in: async function (context) {
      let index_path = path_join(["notes", app_firebase_path_index()]);
      await firebase_storage_initialize_context(index_path, context);
      html_item_add(context, app_todo_main, index_path, on_complete);
    },
  });
}
