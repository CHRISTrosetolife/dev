import { html_button_add_text } from "./html_button_add_text.mjs";
import { html_button } from "./html_button.mjs";
export function html_button_add(root, text, on_click) {
  html_button(root, html_button_add_text(text), on_click);
}
