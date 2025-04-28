import { html_link_prefix } from "./html_link_prefix.mjs";
import { html_style_link_blank } from "./html_style_link_blank.mjs";
export function html_style_link_prefix(prefix, link) {
  let v = html_style_link_blank(html_link_prefix(prefix, link));
  return v;
}
