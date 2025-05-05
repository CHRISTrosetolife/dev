import { html_on_click } from "./html_on_click.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
import { prayers_list } from "./prayers_list.mjs";
import { prayers } from "./prayers.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_pray() {
  let body = html_style_default_initialize();
  let ps = prayers();
  let pl = prayers_list(ps);
  $2i;
  each(pl, function lambda_each(prayer) {
    let p = html_p_text(body, prayer);
    html_on_click(p, function () {});
  });
  (function () {});
}
