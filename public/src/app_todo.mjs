import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { log } from "./log.mjs";
import { firebase_list } from "./firebase_list.mjs";
export async function app_todo() {
  await app_firebase(async (root) => {
    html_clear_scroll_top(root);
    let r = await firebase_list("todo/list.json");
    log({
      r,
    });
  });
}
