import { html_id } from "./html_id.mjs";
import { html_style_font_color_default_set } from "./html_style_font_color_default_set.mjs";
import { html_style_default } from "./html_style_default.mjs";
import { html_style } from "./html_style.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function html_element(parent, tag_name) {
  assert_arguments_length(arguments, 2);
  let { element } = parent;
  let e = document.createElement(tag_name);
  element.appendChild(e);
  let result = {
    element: e,
  };
  if (false) {
    ("not sure why this is here");
    html_style_font_color_default_set(result);
  }
  html_style(result, html_style_default());
  html_id(result);
  return result;
}
