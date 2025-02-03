import { html_div_text } from "./html_div_text.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_input_width_full } from "./html_input_width_full.mjs";
export function html_input_width_full_placeholder(parent, placeholder) {
  let title = html_div_text(parent, placeholder);
  let input = html_input_width_full(parent);
  html_placeholder(input, placeholder);
  return input;
}
