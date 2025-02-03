import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
export function html_style_background_color_transparent(div, color, percent) {
  html_style_background_color(
    div,
    string_combine_multiple([
      "color-mix(in srgb, ",
      color,
      " ",
      percent,
      "%, transparent)",
    ]),
  );
}
