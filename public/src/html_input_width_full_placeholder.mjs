import { html_placeholder_generic } from "./html_placeholder_generic.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
export function html_input_width_full_placeholder(parent, placeholder) {
  let fn = html_input_width_full;
  let v = html_placeholder_generic(parent, placeholder, fn);
  return v;
}
