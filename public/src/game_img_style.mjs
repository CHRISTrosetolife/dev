import { game_img_style_transition } from "./game_img_style_transition.mjs";
import { game_img_position } from "./game_img_position.mjs";
import { html_style } from "./html_style.mjs";
import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style_width } from "./html_style_width.mjs";
import { html_style_height } from "./html_style_height.mjs";
export function game_img_style(image, y, x, z_index) {
  let unit = game_tile_units_css(1);
  html_style_width(image, unit);
  html_style_height(image, unit);
  game_img_style_transition(image);
  html_style(image, {
    position: "absolute",
    "z-index": z_index,
  });
  game_img_position(image, y, x);
}
