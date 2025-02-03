import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
export function html_input_width_full_placeholder(parent, placeholder) {
  let password = html_input_width_full(parent);
  html_attribute_set(password, "placeholder", placeholder);
  return password;
}
