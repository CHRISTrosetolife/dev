import { html_style_default } from "./html_style_default.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
export function html_element(parent, tag_name) {
  let { element } = parent;
  let e = document.createElement(tag_name);
  element.appendChild(e);
  let result = {
    element: e,
  };
  html_style_font_color(result, "black");
  html_style(result, html_style_default());
  return result;
}
