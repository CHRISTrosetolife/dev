import { firebase_storage_initialize_context } from "./firebase_storage_initialize_context.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { html_button_add } from "./html_button_add.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_notes() {
  let root = html_style_default_initialize();
  html_button_add(root, "note");
  await app_firebase({
    on_logged_in: async function (context) {
      let index_path = app_todo_firebase_path_index();
      await firebase_storage_initialize_context(index_path, context);
      app_todo_main(context);
    },
  });
}
