import { game_img_position } from "./game_img_position.mjs";
import { app_gs_z_index } from "./app_gs_z_index.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_height } from "./html_style_height.mjs";
export function game_img_style_generic(
  image,
  height_tiles,
  width_tiles,
  z_index_name,
  y_position,
  x_position,
) {
  html_style_height(image, game_tile_units_css(height_tiles));
  html_style_width(image, game_tile_units_css(width_tiles));
  html_style(image, {
    position: "absolute",
    "z-index": app_gs_z_index(z_index_name),
  });
  game_img_position(image, y_position, x_position);
}
