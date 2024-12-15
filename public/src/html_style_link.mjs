import { html_a } from "./html_a.mjs";
import { html_style_link_generic } from "./html_style_link_generic.mjs";
export function html_style_link(url) {
  return html_style_link_generic(html_a, url);
}
