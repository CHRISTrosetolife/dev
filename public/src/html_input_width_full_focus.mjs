import { html_focus } from "./html_focus.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
export function html_input_width_full_focus(parent) {
  let input = html_input_width_full(parent);
  html_focus(input);
  return input;
}
