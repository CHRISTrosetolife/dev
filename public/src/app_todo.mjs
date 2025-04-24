import { html_overlay_z } from "./html_overlay_z.mjs";
import { list_add } from "./list_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_todo() {
  list_add(html_overlay_z(), fn_name("app_todo"));
  await app_firebase({
    on_logged_in: async function (context) {
      let index_path = app_todo_firebase_path_index();
      let index = await firebase_storage_initialize(index_path);
      object_merge(context, {
        index,
      });
      app_todo_main(context);
    },
  });
}
