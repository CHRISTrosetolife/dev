import { app_firebase } from "./app_firebase.mjs";
export async function app_sleep() {
  await app_firebase({
    on_logged_in: async (context) => {},
  });
}
