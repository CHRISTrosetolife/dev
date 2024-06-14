import { game_img_style } from "./game_img_style.mjs";
import { html_img } from "./html_img.mjs";
export function game_img(map, img_url, r, c, z_index) {
  let image = html_img(map, img_url);
  game_img_style(image, z_index, c, r);
  return image;
}
