import { html_button_next_text } from "./html_button_next_text.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_width_full_text_click_next(root, next_on_click) {
  return html_button_width_full_text_click(
    root,
    html_button_next_text(),
    next_on_click,
  );
}
