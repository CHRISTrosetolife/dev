import { html_a_blank } from "./html_a_blank.mjs";
import { html_clear_inner_get } from "./html_clear_inner_get.mjs";
export function html_style_link(url) {
  let html_a_lambda = html_a_blank;
  return (c) => {
    let text = html_clear_inner_get(c);
    html_a_blank(c, text, url);
  };
}
