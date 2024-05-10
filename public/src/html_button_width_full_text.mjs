import { html_inner_set } from "./html_inner_set.mjs";
import { html_button_width_full } from "./html_button_width_full.mjs";
export function html_button_width_full_text(parent, button_text) {
  let button_previous = html_button_width_full(parent);
  html_inner_set(button_previous, button_text);
  return button_previous;
}
