import { html_style_success_background } from "./html_style_success_background.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_success(component) {
  html_style(component, {
    "background-color": html_style_success_background(),
    "border-color": "MediumSeaGreen",
  });
}
