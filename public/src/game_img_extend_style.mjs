import { game_img_style_generic } from "./game_img_style_generic.mjs";
import { subtract } from "./subtract.mjs";
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
  let y_position = subtract(y, y_extend);
  let x_position = subtract(x, x_extend);
  game_img_style_generic(
    image,
    height_tiles,
    width_tiles,
    z_index_name,
    y_position,
    x_position,
  );
}
