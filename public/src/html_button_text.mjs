import { html_inner_set } from "./html_inner_set.mjs";
import { html_button } from "./html_button.mjs";
export function html_button_text(container, text) {
  let b = html_button(container);
  html_inner_set(b, text);
  return b;
}
