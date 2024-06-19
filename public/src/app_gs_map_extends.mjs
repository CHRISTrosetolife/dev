import { floor } from "./floor.mjs";
import { ceiling } from "./ceiling.mjs";
import { game_tile_size_px } from "./game_tile_size_px.mjs";
export function app_gs_map_extends() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let size_px = game_tile_size_px();
  let x_count = ceiling(w / size_px);
  let y_count = ceiling(h / size_px);
  let x_extend = floor(x_count / 2);
  let y_extend = floor(y_count / 2);
  return {
    y_extend,
    x_extend,
  };
}
