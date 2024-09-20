import { html_style_font_color } from "./html_style_font_color.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
export function html_a_style(a) {
  html_style_bold(a);
  html_style_font_color(a, "darkblue");
}
