export function game_direction_to_delta_row(direction) {
  return direction === "up" ? -1 : direction === "down" ? 1 : 0;
}
