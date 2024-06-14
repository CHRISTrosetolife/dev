import { game_img_path_pipoya } from "./game_img_path_pipoya.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function game_img_character(name, index) {
  assert_arguments_length(arguments, 2);
  return string_combine_multiple([
    game_img_path_pipoya(),
    "character\\",
    "sliced\\",
    name,
    "_",
    index,
    ".png",
  ]);
}
