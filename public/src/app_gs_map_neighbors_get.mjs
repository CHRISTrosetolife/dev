import { app_gs_overlays_any_wall } from "./app_gs_overlays_any_wall.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
export function app_gs_map_neighbors_get(map, v) {
  let { x, y } = v;
  let neighbors = [];
  if (y >= 1) {
    list_add(neighbors, map.tiles[y - 1][x]);
  }
  if (x >= 1) {
    list_add(neighbors, map.tiles[y][x - 1]);
  }
  let y1 = y + 1;
  if (y1 < map.y_size) {
    list_add(neighbors, map.tiles[y1][x]);
  }
  let x1 = x + 1;
  if (x1 < map.x_size) {
    list_add(neighbors, map.tiles[y][x1]);
  }
  neighbors = list_filter(neighbors, (n) => !app_gs_overlays_any_wall(map, n));
  return neighbors;
}
