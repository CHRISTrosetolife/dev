import { game_direction_to_delta_column } from "./game_direction_to_delta_column.mjs";
import { game_direction_to_delta_row } from "./game_direction_to_delta_row.mjs";
export function game_direction_to_delta(direction) {
  let delta = {};
  delta.y = game_direction_to_delta_row(direction);
  delta.x = game_direction_to_delta_column(direction);
  return delta;
}
