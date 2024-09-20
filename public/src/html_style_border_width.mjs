import { html_style } from "./html_style.mjs";
export function html_style_border_width(component, value) {
  html_style(component, {
    "border-width": value,
  });
}
