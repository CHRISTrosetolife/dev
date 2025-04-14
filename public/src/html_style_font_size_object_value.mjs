import { html_style_font_size_property } from "./html_style_font_size_property.mjs";
import { html_style_default_font_size_value_get } from "./html_style_default_font_size_value_get.mjs";
export function html_style_font_size_object_value(default_font_size) {
  return {
    [html_style_font_size_property()]:
      html_style_default_font_size_value_get(default_font_size),
  };
}
