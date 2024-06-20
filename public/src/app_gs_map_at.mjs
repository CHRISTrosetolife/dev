export function app_gs_map_at(grid, a, lambda) {
  let tile = grid[a.y][a.x];
  lambda(tile);
}
