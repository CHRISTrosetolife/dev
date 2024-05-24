import { html_style_bold } from "./html_style_bold.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
export function app_ceb_word_style(button) {
  html_style_font_color(button, "darkblue");
  html_style_bold(button);
}
