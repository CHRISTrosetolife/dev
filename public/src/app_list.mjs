import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_list() {
  let body = html_style_default_initialize();
  let t = html_textarea(body);
  html_style_width_full(t);
  html_button_width_full_text();
}
