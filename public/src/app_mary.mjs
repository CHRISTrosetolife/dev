import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { firebase_save } from "./firebase_save.mjs";
import { app_firebase } from "./app_firebase.mjs";
import { html_button_add } from "./html_button_add.mjs";
import { html_textarea_width_full } from "./html_textarea_width_full.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { clipboard_paste_web } from "./clipboard_paste_web.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { clipboard_copy_web } from "./clipboard_copy_web.mjs";
export async function app_mary() {
  await app_firebase({
    on_logged_in: async (context) => {
      let { root } = context;
      let prayer = await clipboard_paste_web();
      let response =
        "Behold, I am an unworthy servant of the LORD. May the word of the LORD come true.";
      await clipboard_copy_web(response);
      html_p_text(root, "Response copied to clipboard:");
      html_p_text(root, response);
      let t = html_textarea_width_full(root);
      html_value_set(t, prayer);
      html_button_add(root, "word", async () => {
        let name = string_combine_multiple([date_string_iso_file()]);
        let index_path = string_combine("mary/", name);
        await firebase_save(index_path, index);
      });
    },
  });
}
