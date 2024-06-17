import { game_tile_size_px } from "./game_tile_size_px.mjs";
import { game_tiles_max } from "./game_tiles_max.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function game_tile_units_css(tiles_count) {
  let tile_size_px = game_tile_size_px();
  return string_combine(tile_size_px * tiles_count, "px");
  let tiles_max = game_tiles_max();
  let v = (100 / tiles_max) * tiles_count;
  return string_combine_multiple(["max(", v, "dvw,", v, "dvh)"]);
}
