import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
export function html_style_background_color_black_alpha(menu, alpha) {
  let rgb = "1,1,1";
  html_style_background_color(
    menu,
    string_combine_multiple(["rgba(", rgb, ",", alpha, ")"]),
  );
}
