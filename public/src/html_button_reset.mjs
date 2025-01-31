import { emoji_danger } from "./emoji_danger.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_reset(root, lambda) {
  return html_button_width_full_text_click(
    root,
    string_combine_multiple([emoji_danger(), " Reset"]),
    lambda,
  );
}
