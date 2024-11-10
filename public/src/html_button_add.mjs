import { button_add_text } from "./button_add_text.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_add(root, text, download) {
  html_button_width_full_text_click(root, button_add_text(text), download);
}
