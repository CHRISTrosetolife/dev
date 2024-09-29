import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { log } from "./log.mjs";
import { firebase_list } from "./firebase_list.mjs";
export async function app_todo() {
  await app_firebase(async (context) => {
    let { root } = context;
    html_clear_scroll_top(root);
    let { items } = await firebase_list("todo/");
    log({
      items,
    });
    button_width_full_click();
  });
}
