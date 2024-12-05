import { app_grocery_main } from "./app_grocery_main.mjs";
import { object_merge } from "./object_merge.mjs";
import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { app_firebase } from "./app_firebase.mjs";
export async function app_grocery() {
  await app_firebase({
    on_logged_in: async (context) => {
      let index_path = "grocery/index.json";
      let index = await firebase_storage_initialize(index_path);
      object_merge(context, {
        index,
      });
      app_grocery_main(context);
    },
  });
}
