import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_link_generic } from "./html_style_link_generic.mjs";
import { html_a_blank } from "./html_a_blank.mjs";
export function html_style_link_blank(url) {
  let v = html_style_link_generic(html_a_blank, url);
  html_style_font_size(v, "inherit");
  return v;
}
