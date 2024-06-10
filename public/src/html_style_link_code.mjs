import { html_style_code } from "./html_style_code.mjs";
import { html_style_link } from "./html_style_link.mjs";
export function html_style_link_code(url) {
  return (e) => {
    html_style_link(url)(e);
    html_style_code(e);
  };
}
