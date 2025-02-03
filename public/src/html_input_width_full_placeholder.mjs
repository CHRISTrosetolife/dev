import { html_placeholder } from "./html_placeholder.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
export function html_input_width_full_placeholder(parent, placeholder) {
  let password = html_input_width_full(parent);
  html_placeholder(password, placeholder);
  return password;
}
