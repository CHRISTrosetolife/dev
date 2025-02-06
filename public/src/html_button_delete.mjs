import { html_button } from "./html_button.mjs";
import { emoji_delete } from "./emoji_delete.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_button_delete(root, after, lambda) {
  html_button(
    root,
    string_combine_multiple([emoji_delete(), " Delete ", after]),
    lambda,
  );
}
