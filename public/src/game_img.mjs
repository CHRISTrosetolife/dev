import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { game_img_style } from "./game_img_style.mjs";
import { html_img } from "./html_img.mjs";
export function game_img(context, img_url, y_x, z_index_name) {
  assert_arguments_length(arguments, 4);
  let image = html_img(context.map_c, img_url);
  game_img_style(image, y_x.y, y_x.x, z_index_name);
  return image;
}
