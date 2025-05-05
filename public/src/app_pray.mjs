import { prayers_list } from "./prayers_list.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
import { prayers } from "./prayers.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_pray() {
  let body = html_style_default_initialize();
  let ps = prayers();
  html_p_text_multiple(body, prayers_list(ps));
}
