import { html_style_background_color_alpha } from "./html_style_background_color_alpha.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
export function app_gs_div_rounded_alpha(parent, rgb, alpha) {
  let menu = html_div(parent);
  html_style(menu, {
    padding: game_tile_units_css(0.25),
  });
  html_style_background_color_alpha(menu, rgb, alpha);
  return menu;
}
