import { html_textarea_width_full } from "./html_textarea_width_full.mjs";
import { html_placeholder_generic } from "./html_placeholder_generic.mjs";
export function html_textarea_width_full_placeholder(parent, placeholder) {
  let fn = html_textarea_width_full;
  let v = html_placeholder_generic(parent, placeholder, fn);
  return v;
}
