import { html_clear_inner_get } from "./html_clear_inner_get.mjs";
export function html_style_link_generic(html_a_lambda, url) {
  return (c) => {
    let text = html_clear_inner_get(c);
    html_a_lambda(c, text, url);
  };
}
