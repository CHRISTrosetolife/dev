import { html_on_click } from "./html_on_click.mjs";
import { html_button_text } from "./html_button_text.mjs";
export function html_button_text_click_noload(container, text, lambda) {
  let b = html_button_text(container, text);
  html_on_click(b, lambda);
  return b;
}
