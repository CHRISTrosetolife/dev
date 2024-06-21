export function app_gs_map_at(map, coordinates) {
  let grid = map.tiles;
  let tile = grid[coordinates.y][coordinates.x];
  return tile;
}
