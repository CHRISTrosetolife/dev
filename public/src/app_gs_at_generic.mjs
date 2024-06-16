export function app_gs_at_generic(grid, a, lambda) {
  let tile = grid[a.y][a.x];
  lambda(tile);
}
