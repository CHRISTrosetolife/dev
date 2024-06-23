import { game_img_style_transition } from "./game_img_style_transition.mjs";
import { game_character_index } from "./game_character_index.mjs";
import { game_img_character } from "./game_img_character.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_character_c(map_c, character, y_x) {
  let player_c = game_img(
    map_c,
    game_img_character(character, game_character_index("down")),
    y_x,
    "player",
  );
  game_img_style_transition(player_c);
  return player_c;
}
