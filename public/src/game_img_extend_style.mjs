import { app_gs_z_index } from "./app_gs_z_index.mjs";
import { subtract } from "./subtract.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_width } from "./html_style_width.mjs";
export function game_img_extend_style(
  image,
  y,
  x,
  z_index_name,
  y_extend,
  x_extend,
) {
  let height_tiles = 1 + 2 * y_extend;
  let width_tiles = 1 + 2 * x_extend;
  html_style_height(image, game_tile_units_css(height_tiles));
  html_style_width(image, game_tile_units_css(width_tiles));
  html_style(image, {
    position: "absolute",
    "z-index": app_gs_z_index(z_index_name),
  });
  let y_position = subtract(y, y_extend);
  game_img_position(image, y_position, subtract(x, x_extend));
}
