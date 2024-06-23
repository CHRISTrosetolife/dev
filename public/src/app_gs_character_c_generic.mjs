import { game_img_style_transition } from "./game_img_style_transition.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_character_c_generic(map_c, img_url, y_x, z_index_name) {
  let c = game_img(map_c, img_url, y_x, z_index_name);
  game_img_style_transition(c);
  return c;
}
