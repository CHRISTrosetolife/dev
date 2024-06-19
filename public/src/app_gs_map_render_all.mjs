import { range_from } from "./range_from.mjs";
import { each } from "./each.mjs";
import { app_gs_map_cell } from "./app_gs_map_cell.mjs";
export function app_gs_map_render_all(map, map_component, player_overlay) {
  each(range_from(y - y_extend, y + y_extend), (ye) => {
    each(range_from(x - x_extend, x + x_extend), (xe) => {
      app_gs_map_cell(map, map_component, player_overlay, tile);
    });
  });
}
