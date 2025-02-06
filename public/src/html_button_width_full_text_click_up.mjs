import { html_button } from "./html_button.mjs";
import { html_button_up_text } from "./html_button_up_text.mjs";
export function html_button_width_full_text_click_up(root, up_onclick) {
  html_button(root, html_button_up_text(), up_onclick);
}
