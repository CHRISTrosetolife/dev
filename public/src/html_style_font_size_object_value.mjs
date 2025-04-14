import { html_style_font_size_object } from "./html_style_font_size_object.mjs";
import { html_style_default_font_size_value_get } from "./html_style_default_font_size_value_get.mjs";
export function html_style_font_size_object_value(default_font_size) {
  let v = html_style_default_font_size_value_get(default_font_size);
  let v2 = html_style_font_size_object(v);
  return v2;
}
