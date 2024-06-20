import { game_character_indices } from "./game_character_indices.mjs";
import { game_img_style_transition } from "./game_img_style_transition.mjs";
import { game_character_index } from "./game_character_index.mjs";
import { game_img_character } from "./game_img_character.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_overlay_player(map_c, map) {
  game_character_indices();
  let player_c = game_img(
    map_c,
    game_img_character(map.player.character, game_character_index("down")),
    map.player,
    "player",
  );
  game_img_style_transition(player_c);
  return player_c;
}
