import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_todo_firebase_path } from "./app_todo_firebase_path.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { log } from "./log.mjs";
import { firebase_list } from "./firebase_list.mjs";
import { string_combine } from "./string_combine.mjs";
export async function app_todo() {
  await app_firebase(async (context) => {
    let { root } = context;
    html_clear_scroll_top(root);
    let index = "index.json";
    let { items } = await firebase_list(app_todo_firebase_path());
    log({
      items,
    });
    html_button_width_full_text_click(root, "initialize", async () => {
      await firebase_upload_object(
        string_combine(app_todo_firebase_path(), "test.json"),
        {
          test: "abc",
        },
      );
    });
  });
}
