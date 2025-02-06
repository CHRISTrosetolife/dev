import { html_button } from "./html_button.mjs";
import { emoji_danger } from "./emoji_danger.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_button_reset(root, lambda) {
  return html_button(
    root,
    string_combine_multiple([emoji_danger(), " Reset"]),
    lambda,
  );
}
