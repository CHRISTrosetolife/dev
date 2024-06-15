import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { game_img_style } from "./game_img_style.mjs";
import { html_img } from "./html_img.mjs";
export function game_img(map, img_url, o, z_index) {
  assert_arguments_length(arguments, 4);
  let image = html_img(map, img_url);
  game_img_style(image, o.y, o.x, z_index);
  return image;
}
