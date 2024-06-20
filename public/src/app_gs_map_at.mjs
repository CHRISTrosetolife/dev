export function app_gs_map_at(map, coordinates) {
  let tile = map.tiles[coordinates.y][coordinates.x];
  return tile;
}
