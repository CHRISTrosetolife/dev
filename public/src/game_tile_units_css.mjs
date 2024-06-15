import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function game_tile_units_css(tiles_count) {
  let tiles_max = 17;
  let v = (100 / tiles_max) * tiles_count;
  return string_combine_multiple(["max(", v, "dvw,", v, "dvh)"]);
}
