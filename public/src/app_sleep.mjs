import { firebase_storage_initialize } from "./firebase_storage_initialize.mjs";
import { app_firebase } from "./app_firebase.mjs";
export async function app_sleep() {
  await app_firebase({
    on_logged_in: async (context) => {
      return;
      let index = await firebase_storage_initialize("sleep/");
    },
  });
}
