import { html_a } from "./html_a.mjs";
import { html_style_code } from "./html_style_code.mjs";
import { html_clear_inner_get } from "./html_clear_inner_get.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
export function html_style_function_name(e) {
  let text = html_clear_inner_get(e);
  let url = function_name_to_url_github(text);
  let a = html_a(e, text, url);
  html_style_code(a);
}
