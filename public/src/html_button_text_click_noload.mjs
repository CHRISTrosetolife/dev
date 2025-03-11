import { html_on_click_noload } from "./html_on_click_noload.mjs";
import { html_button_text } from "./html_button_text.mjs";
export function html_button_text_click_noload(container, text, lambda) {
  let b = html_button_text(container, text);
  html_on_click_noload(b, lambda);
  return b;
}
