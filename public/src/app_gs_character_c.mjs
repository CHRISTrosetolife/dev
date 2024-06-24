import { game_character_index } from "./game_character_index.mjs";
import { app_gs_character_c_generic } from "./app_gs_character_c_generic.mjs";
import { game_img_character } from "./game_img_character.mjs";
export function app_gs_character_c(map_c, character, y_x, z_index_name) {
  let img_url = game_img_character(
    character,
    game_character_index(character.direction),
  );
  let c = app_gs_character_c_generic(map_c, img_url, y_x, z_index_name);
  return c;
}
