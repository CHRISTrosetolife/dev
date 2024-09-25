import { html_style_font_color_property } from "./html_style_font_color_property.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_font_color(component, color) {
  html_style(component, {
    [html_style_font_color_property()]: color,
  });
}
