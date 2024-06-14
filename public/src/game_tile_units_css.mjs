import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function game_tile_units_css(tiles_count) {
  let tiles_min = 10;
  let v = (100 / tiles_min) * tiles_count;
  return string_combine_multiple(["min(", v, "dvw,", v, "dvh)"]);
}
