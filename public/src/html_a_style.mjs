import { html_style } from "./html_style.mjs";
import { html_style_default_a } from "./html_style_default_a.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
export function html_a_style(a) {
  html_style_default_a();
  html_style_font_color(a, "darkblue");
  html_style();
}
