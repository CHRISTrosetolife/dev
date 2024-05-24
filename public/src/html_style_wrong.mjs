import { html_style_background_color } from "./html_style_background_color.mjs";
import { html_style } from "./html_style.mjs";
export function html_style_wrong(keyboard_button) {
  html_style(keyboard_button, {
    "border-color": "red",
  });
  html_style_background_color(keyboard_button, "salmon");
}
