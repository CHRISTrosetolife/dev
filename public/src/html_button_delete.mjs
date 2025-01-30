import { emoji_delete } from "./emoji_delete.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_delete(root, lambda) {
  html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_delete(), " Delete"]),
    lambda,
  );
}
