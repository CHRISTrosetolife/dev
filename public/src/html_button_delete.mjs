import { firebase_save_index } from "./firebase_save_index.mjs";
import { list_remove } from "./list_remove.mjs";
import { emoji_delete } from "./emoji_delete.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_delete(root) {
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_delete(), " Delete"]),
    async () => {
      list_remove(items_all, item);
      await firebase_save_index(context, index_path);
      refresh(context);
    },
  );
}
