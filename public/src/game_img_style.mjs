import { html_style } from "./html_style.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_width } from "./html_style_width.mjs";
export function game_img_style(image, z_index, c, r) {
  html_style_width(image, game_tile_units_css(1));
  html_style(image, {
    position: "absolute",
    "z-index": z_index,
    left: game_tile_units_css(c),
    top: game_tile_units_css(r),
  });
}
