import { html_style_link } from "./html_style_link.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
export function html_link_text(next_url_component, url_next) {
  html_inner_set(next_url_component, url_next);
  html_style_link(url_next)(next_url_component);
}
