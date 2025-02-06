import { html_button } from "./html_button.mjs";
import { html_button_previous_text } from "./html_button_previous_text.mjs";
export function html_button_width_full_text_click_previous(root, on_click) {
  return html_button(root, html_button_previous_text(), on_click);
}
