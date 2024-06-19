import { game_img_extend_style } from "./game_img_extend_style.mjs";
export function game_img_style(image, y, x, z_index) {
  let x_extend = 0;
  let y_extend = 0;
  game_img_extend_style(image, y, x, z_index, y_extend, x_extend);
}
