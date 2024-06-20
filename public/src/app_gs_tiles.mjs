import { app_gs_z_index } from "./app_gs_z_index.mjs";
import { app_gs_z_indexes } from "./app_gs_z_indexes.mjs";
import { game_img_base } from "./game_img_base.mjs";
import { game_img } from "./game_img.mjs";
export function app_gs_tiles() {
  let z_indexes = app_gs_z_indexes();
  let tile_c = game_img(map_c, game_img_base(id), tile, app_gs_z_index("tile"));
}
