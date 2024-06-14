import { html_style_width } from "./html_style_width.mjs";
import { html_style_border_box } from "./html_style_border_box.mjs";
export function html_style_width_full(component) {
  html_style_border_box(component);
  let value = "100%";
  html_style_width(component, value);
}
