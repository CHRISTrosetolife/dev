import { app_gs_map_at } from "./app_gs_map_at.mjs";
import { app_gs_map_neighbors_get } from "./app_gs_map_neighbors_get.mjs";
import { app_gs_map_tile_id } from "./app_gs_map_tile_id.mjs";
import { graph_path_shortest_neighbors } from "./graph_path_shortest_neighbors.mjs";
export function app_gs_map_path(context, to_any) {
  let from = app_gs_map_at(context, context.game.player);
  return graph_path_shortest_neighbors(
    app_gs_map_tile_id,
    (v) => {
      return app_gs_map_neighbors_get(context.map, v);
    },
    from,
    to_any,
  );
}
