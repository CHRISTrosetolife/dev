import { app_notes_main } from "./app_notes_main.mjs";
import { app_notes_firebase_path_index } from "./app_notes_firebase_path_index.mjs";
import { firebase_storage_initialize_context } from "./firebase_storage_initialize_context.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_notes() {
  let root = html_style_default_initialize();
  await app_firebase({
    on_logged_in: async function (context) {
      let index_path = app_notes_firebase_path_index();
      await firebase_storage_initialize_context(index_path, context);
      app_notes_main(context);
    },
  });
}
