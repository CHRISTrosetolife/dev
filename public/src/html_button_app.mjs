import { html_button_window_open } from "./html_button_window_open.mjs";
import { app_extension_html_combine } from "./app_extension_html_combine.mjs";
import { app_name_string } from "./app_name_string.mjs";
export function html_button_app(body, a_name_prefixed, text) {
  let a_name = app_name_string(a_name_prefixed);
  let url = app_extension_html_combine(a_name);
  html_button_window_open(body, url, text);
}
