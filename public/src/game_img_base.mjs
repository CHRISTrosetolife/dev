import { game_img_path_pipoya_rpg_32 } from "./game_img_path_pipoya_rpg_32.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function game_img_base(i) {
  return string_combine_multiple([
    game_img_path_pipoya_rpg_32(),
    "sliced\\base_",
    i,
    ".png",
  ]);
}
