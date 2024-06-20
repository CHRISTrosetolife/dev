import { app_gs_player_c_generic } from "./app_gs_player_c_generic.mjs";
export function app_gs_player_c(map_c, map) {
  return app_gs_player_c_generic(map_c, map.player.character, map.player);
}
