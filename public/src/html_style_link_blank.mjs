import { html_style_link_generic } from "./html_style_link_generic.mjs";
import { html_a_blank } from "./html_a_blank.mjs";
export function html_style_link_blank(url) {
  let v = html_style_link_generic(html_a_blank, url);
  return v;
}
