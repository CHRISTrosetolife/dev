import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_div_rounded_alpha(parent, rgb, alpha) {
  assert_arguments_length(arguments, 3);
  let menu = html_div(parent);
  html_style(menu, {
    padding: game_tile_units_css(0.25),
  });
  html_style_background_color(
    menu,
    string_combine_multiple([
      "color-mix(in srgb, ",
      "red",
      " ",
      "30",
      "%, transparent)",
    ]),
  );
  return menu;
}
