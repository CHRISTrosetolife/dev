import { app_todo_main } from "./app_todo_main.mjs";
import { object_merge } from "./object_merge.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { app_firebase } from "./app_firebase.mjs";
export async function app_grocery() {
  await app_firebase({
    on_logged_in: async (context) => {
      let index_path = app_todo_firebase_path_index();
      let index = await firebase_storage_initialize(index_path);
      object_merge(context, {
        index,
      });
      app_todo_main(context);
    },
  });
}
