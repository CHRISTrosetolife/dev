import { html_clear_inner_get } from "./html_clear_inner_get.mjs";
import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
import { html_a } from "./html_a.mjs";
import { function_name_to_url_github } from "./function_name_to_url_github.mjs";
export function html_style_function_name(e) {
  let text = html_clear_inner_get(e);
  let url = function_name_to_url_github(text);
  let a = html_a(e, text, url);
  app_learn_code_style_code_colored(a);
}
