import { html_style_font_size_object } from "./html_style_font_size_object.mjs";
import { html_style } from "./html_style.mjs";
import { html_clear_inner_get } from "./html_clear_inner_get.mjs";
export function html_style_link_generic(html_a_lambda, url) {
  let v2 = function (c) {
    let text = html_clear_inner_get(c);
    let a = html_a_lambda(c, text, url);
    html_style(a, html_style_font_size_object("inherit"));
  };
  return v2;
}
