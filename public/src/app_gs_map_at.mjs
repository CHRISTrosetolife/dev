import { app_gs_map_at_generic } from "./app_gs_map_at_generic.mjs";
export function app_gs_map_at(map, coordinates) {
  let grid = map.tiles;
  return app_gs_map_at_generic(grid, coordinates);
}
