import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { game_character_indices } from "./game_character_indices.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function game_character_index(direction) {
  assert_arguments_length(arguments, 1);
  return object_property_get(game_character_indices(), direction);
}
