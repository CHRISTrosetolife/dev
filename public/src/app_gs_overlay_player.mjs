import { list_index } from "./list_index.mjs";
import { game_character_index } from "./game_character_index.mjs";
import { game_img_character } from "./game_img_character.mjs";
import { game_img } from "./game_img.mjs";
import { app_gs_z_indexes } from "./app_gs_z_indexes.mjs";
export function app_gs_overlay_player(map_c, map) {
  let z_indexes = app_gs_z_indexes();
  let player_overlay = game_img(
    map_c,
    game_img_character(map.player.character, game_character_index("down")),
    map.player,
    list_index(z_indexes, "player"),
  );
  return player_overlay;
}
