import { app_todo_firebase_path_combine } from "./app_todo_firebase_path_combine.mjs";
import { firebase_download } from "./firebase_download.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_todo_firebase_path } from "./app_todo_firebase_path.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { log } from "./log.mjs";
import { firebase_list } from "./firebase_list.mjs";
export async function app_todo() {
  await app_firebase(async (context) => {
    let { root } = context;
    html_clear_scroll_top(root);
    let index = "index.json";
    let { items } = await firebase_list(app_todo_firebase_path());
    let test = "test.json";
    let test_path = app_todo_firebase_path_combine(test);
    html_button_width_full_text_click(root, "initialize", async () => {
      await firebase_upload_object(test_path, {
        test: "abc",
      });
    });
    let d = await firebase_download(test_path);
    log({
      items,
      d,
    });
  });
}
