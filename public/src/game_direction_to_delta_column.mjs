export function game_direction_to_delta_column(direction) {
  return direction === "left" ? -1 : direction === "right" ? 1 : 0;
}
