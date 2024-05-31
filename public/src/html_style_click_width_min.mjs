import { html_style_default_font_size_value } from "./html_style_default_font_size_value.mjs";
import { html_style_default_font_size_value_get } from "./html_style_default_font_size_value_get.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_click_width_min(part) {
  html_style(part, {
    "min-width": html_style_default_font_size_value_get(
      html_style_default_font_size_value() * 2,
    ),
  });
}
