import { html_style_background_color_transparent } from "./html_style_background_color_transparent.mjs";
import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_div_rounded_transparent(parent, color, percent) {
  assert_arguments_length(arguments, 3);
  let div = html_div(parent);
  html_style(div, {
    padding: game_tile_units_css(0.25),
  });
  html_style_background_color_transparent(div, color, percent);
  html_style_rounded_padded(div);
  return div;
}
