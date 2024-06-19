import { each_range } from "./each_range.mjs";
import { app_gs_map_cell } from "./app_gs_map_cell.mjs";
export function app_gs_map_render_all(map, map_component, player_overlay) {
  each_range(map.y_size, (y) => {
    each_range(map.x_size, (x) => {
      let tile = map.tiles[y][x];
      app_gs_map_cell(map, map_component, player_overlay, tile);
    });
  });
}
