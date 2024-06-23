import { game_img_style_transition } from "./game_img_style_transition.mjs";
import { game_character_index } from "./game_character_index.mjs";
import { game_img_character } from "./game_img_character.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_character_c(map_c, character, y_x) {
  let img_url = game_img_character(character, game_character_index("down"));
  let z_index_name = "player";
  let c = game_img(map_c, img_url, y_x, z_index_name);
  game_img_style_transition(c);
  return c;
}
