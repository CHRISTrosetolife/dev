import { app_firebase } from "./app_firebase.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_sleep() {
  let body = html_style_default_initialize();
  await app_firebase({
    on_logged_in: async (context) => {},
  });
}
