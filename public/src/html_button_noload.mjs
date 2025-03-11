import { html_on_click_noload } from "./html_on_click_noload.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
export function html_button_noload(parent, text, on_click) {
  assert_arguments_length(arguments, 3);
  let b = html_button_width_full_text(parent, text);
  html_on_click_noload(b, on_click);
  return b;
}
