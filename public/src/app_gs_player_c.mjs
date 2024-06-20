import { app_gs_player_c_generic } from "./app_gs_player_c_generic.mjs";
export function app_gs_player_c(map_c, map) {
  let y_x = map.player;
  let character = map.player.character;
  return app_gs_player_c_generic(map_c, character, y_x);
}
