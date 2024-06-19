import { add } from "./add.mjs";
import { game_img_style_transition } from "./game_img_style_transition.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { html_style } from "./html_style.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { html_style_height } from "./html_style_height.mjs";
import { subtract } from "./subtract.mjs";
export function game_img_style(image, y, x, z_index) {
  let x_extend = 0;
  let y_extend = 0;
  html_style_width(image, add(game_tile_units_css(1 + 2 * x_extend)));
  html_style_height(image, add(game_tile_units_css(1 + 2 * y_extend)));
  game_img_style_transition(image);
  html_style(image, {
    position: "absolute",
    "z-index": z_index,
  });
  game_img_position(image, subtract(y, y_extend), subtract(x, x_extend));
}
