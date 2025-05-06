import { html_button } from "./html_button.mjs";
import { button_add_text } from "./button_add_text.mjs";
export function html_button_add(root, text, on_click) {
  html_button(root, button_add_text(text), on_click);
}
