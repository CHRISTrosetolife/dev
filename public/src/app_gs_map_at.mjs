import { app_gs_map_at_generic } from "./app_gs_map_at_generic.mjs";
export function app_gs_map_at(context, coordinates) {
  let grid = context.map.tiles;
  return app_gs_map_at_generic(grid, coordinates);
}
