import { html_p_text } from "./html_p_text.mjs";
import { prayers_list } from "./prayers_list.mjs";
import { prayers } from "./prayers.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_pray() {
  let body = html_style_default_initialize();
  let ps = prayers();
  let pl = prayers_list(ps);
  for (let p of pl) {
    html_p_text(body, p);
  }
}
