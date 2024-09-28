import { app_firebase } from "./app_firebase.mjs";
import { log } from "./log.mjs";
import { firebase_list } from "./firebase_list.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_todo() {
  let body = html_style_default_initialize();
  await app_firebase(() => {});
  let r = await firebase_list("todo/list.json");
  log({
    r,
  });
}
