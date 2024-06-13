import { html_style_default_font_size_value_get } from "./html_style_default_font_size_value_get.mjs";
export function html_style_font_size_object(default_font_size) {
  return {
    ["font-size"]: html_style_default_font_size_value_get(default_font_size),
  };
}
