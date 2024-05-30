import { html_clear_inner_get } from "./html_clear_inner_get.mjs";
import { html_a } from "./html_a.mjs";
export function html_style_link(url) {
  return (e) => {
    let text = html_clear_inner_get(e);
    html_a(e, text, url);
  };
}
