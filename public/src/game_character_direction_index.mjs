import { game_character_index } from "./game_character_index.mjs";
import { add } from "./add.mjs";
export function game_character_direction_index(direction, walk_offset) {
  return add(game_character_index(direction), walk_offset);
}
