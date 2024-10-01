import { app_sleep_main } from "./app_sleep_main.mjs";
import { app_firebase } from "./app_firebase.mjs";
export async function app_sleep() {
  await app_firebase({
    on_logged_in: async (context) => {
      await app_sleep_main(context);
    },
  });
}
