import { game_character_indices } from "./game_character_indices.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function game_character_index(direction_) {
  return object_property_get(game_character_indices(), direction_);
}
