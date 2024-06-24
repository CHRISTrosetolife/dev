import { game_character_index } from "./game_character_index.mjs";
import { game_img_character } from "./game_img_character.mjs";
import { html_img_src } from "./html_img_src.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { assert } from "./assert.mjs";
import { app_gs_direction } from "./app_gs_direction.mjs";
export function app_gs_walk_direction(player_c, character, destination) {
  let direction = app_gs_direction(character, destination);
  assert(null_not_is, [direction]);
  character.direction = direction;
  html_img_src(
    player_c,
    game_img_character(character.character, game_character_index(direction)),
  );
  return direction;
}
