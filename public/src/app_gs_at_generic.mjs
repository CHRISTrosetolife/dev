export function app_gs_at_generic(grid, a, lambda_overlay) {
  let tile = grid[a.y][a.x];
  lambda_overlay(tile);
}
