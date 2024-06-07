import { html_on_click } from "./html_on_click.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
export function html_button_width_full_text_click(parent, text, on_click) {
  let b = html_button_width_full_text(parent, text);
  html_on_click(b, on_click);
  return b;
}
