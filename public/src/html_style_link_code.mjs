import { html_style_link_blank } from "./html_style_link_blank.mjs";
import { html_style_code } from "./html_style_code.mjs";
export function html_style_link_code(url) {
  return (e) => {
    html_style_link_blank(url)(e);
    html_style_code(e);
  };
}
