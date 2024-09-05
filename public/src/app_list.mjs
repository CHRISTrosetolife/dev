import { html_value_get } from "./html_value_get.mjs";
import { html_button_width_full_text_click_next } from "./html_button_width_full_text_click_next.mjs";
import { html_style_width_full } from "./html_style_width_full.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_list() {
  let body = html_style_default_initialize();
  let t = html_textarea(body);
  html_style_width_full(t);
  html_button_width_full_text_click_next(body, () => {
    let value = html_value_get(input);
  });
}
