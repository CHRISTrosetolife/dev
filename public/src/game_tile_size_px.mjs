import { number_max } from "./number_max.mjs";
import { floor } from "./floor.mjs";
import { game_tiles_max } from "./game_tiles_max.mjs";
export function game_tile_size_px() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let limit = game_tiles_max();
  let tile_size_px = floor(number_max(h, w) / limit);
  return tile_size_px;
}
