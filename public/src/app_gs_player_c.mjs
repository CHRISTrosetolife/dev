import { app_gs_character_c } from "./app_gs_character_c.mjs";
export function app_gs_player_c(map_c, game) {
  return app_gs_character_c(
    map_c,
    game.player.character,
    game.player,
    "player",
  );
}
