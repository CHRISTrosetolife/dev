import { html_style } from "./html_style.mjs";
export function html_style_font_color(component, color) {
  html_style(component, {
    ["color"]: color,
  });
}
