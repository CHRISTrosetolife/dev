import { html_button } from "./html_button.mjs";
import { button_add_text } from "./button_add_text.mjs";
export function html_button_add(root, text, download) {
  html_button(root, button_add_text(text), download);
}
