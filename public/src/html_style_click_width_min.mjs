import { html_style_units } from "./html_style_units.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_click_width_min(part) {
  html_style(part, {
    "min-width": html_style_units(15),
  });
}
