import { html_style } from "./html_style.mjs";
export function html_style_margin_x(component, x_margin) {
  html_style(component, {
    "margin-left": x_margin,
    "margin-right": x_margin,
  });
}
