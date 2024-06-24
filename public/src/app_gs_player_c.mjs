import { app_gs_character_c } from "./app_gs_character_c.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_player_c(context) {
  assert_arguments_length(arguments, 1);
  return app_gs_character_c(
    map_c,
    game.player.character,
    game.player,
    "player",
  );
}
