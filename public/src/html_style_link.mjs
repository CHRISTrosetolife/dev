import { html_a } from "./html_a.mjs";
import { html_clear_inner_get } from "./html_clear_inner_get.mjs";
export function html_style_link(url) {
  return (c) => {
    let text = html_clear_inner_get(c);
    html_a(c, text, url);
  };
}
