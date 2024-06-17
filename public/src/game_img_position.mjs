import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style } from "./html_style.mjs";
export function game_img_position(image, y, x) {
  html_style(image, {
    left: game_tile_units_css(x),
    top: game_tile_units_css(y),
  });
}
