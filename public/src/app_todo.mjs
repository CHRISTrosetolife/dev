import { firebase_object_initialize } from "./firebase_object_initialize.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { app_todo_main } from "./app_todo_main.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_todo() {
  await app_firebase({
    on_logged_in: async (context) => {
      let index_path = app_todo_firebase_path_index();
      let index = await firebase_object_initialize(index_path);
      object_merge(context, {
        index,
      });
      app_todo_main(context);
    },
  });
}
