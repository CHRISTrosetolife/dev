import { html_style_border_box } from "./html_style_border_box.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_width_full(component) {
  html_style_border_box(component);
  html_style(component, {
    width: "100%",
  });
}
