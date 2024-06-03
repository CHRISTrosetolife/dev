import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { string_combine } from "./string_combine.mjs";
export function html_button_width_full_text_click_next(root, next_on_click) {
  let prefix = "";
  return html_button_width_full_text_click(
    root,
    string_combine(prefix, "➡️ next"),
    next_on_click,
  );
}
