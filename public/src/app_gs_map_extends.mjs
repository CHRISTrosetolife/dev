import { number_min } from "./number_min.mjs";
import { game_tiles_max } from "./game_tiles_max.mjs";
import { floor } from "./floor.mjs";
import { ceiling } from "./ceiling.mjs";
import { game_tile_size_px } from "./game_tile_size_px.mjs";
export function app_gs_map_extends() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let limit = game_tiles_max();
  let tilze_size = limit / number_min(w, h);
  let tile_size_px = game_tile_size_px();
  let x_tiles = ceiling(w / tile_size_px);
  let y_tiles = ceiling(h / tile_size_px);
  let x_extend = floor(x_tiles / 2);
  let y_extend = floor(y_tiles / 2);
  return {
    y_extend,
    x_extend,
  };
}
