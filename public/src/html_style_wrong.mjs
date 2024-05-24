import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
export function html_style_wrong(button) {
  html_style(button, {
    "border-color": "red",
  });
  html_style_background_color(button, "salmon");
  html_style_font_color(button, "white");
}
