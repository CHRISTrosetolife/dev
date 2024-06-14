import { html_style } from "./html_style.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { html_img } from "./html_img.mjs";
export function game_img(map, img_url, r, c, z_index) {
  let overlay = html_img(map, img_url);
  html_style_width(overlay, game_tile_units_css(1));
  html_style(overlay, {
    position: "absolute",
    "z-index": z_index,
    left: game_tile_units_css(c),
    top: game_tile_units_css(r),
  });
}
