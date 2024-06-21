import { html_data_get } from "./html_data_get.mjs";
import { list_find } from "./list_find.mjs";
import { app_gs_map_html_at } from "./app_gs_map_html_at.mjs";
import { app_gs_walk_direction } from "./app_gs_walk_direction.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { null_is } from "./null_is.mjs";
import { app_gs_walk_path } from "./app_gs_walk_path.mjs";
import { app_gs_xy_equal } from "./app_gs_xy_equal.mjs";
import { app_gs_map_path } from "./app_gs_map_path.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { app_gs_map_neighbors_get } from "./app_gs_map_neighbors_get.mjs";
import { app_gs_overlays_any_wall } from "./app_gs_overlays_any_wall.mjs";
export async function app_gs_map_cell_click(map, map_c, player_c, tile) {
  let npc = list_find_property_or(tile.overlays, "type", "npc", null);
  if (null_is(npc)) {
    let walls = app_gs_overlays_any_wall(tile);
    if (!walls) {
      let { path } = app_gs_map_path(map, [tile]);
      if (app_gs_xy_equal(map.player, tile)) {
        let menu_overlay = app_gs_menu_overlay(map_c, map);
        app_gs_menu_main(menu_overlay, map_c, map);
      } else {
        await app_gs_walk_path(map, map_c, player_c, path);
      }
    }
  } else {
    let neighbors = app_gs_map_neighbors_get(map, npc);
    let { path } = app_gs_map_path(map, neighbors);
    await app_gs_walk_path(map, map_c, player_c, path);
    if (0) {
      let tile_cs = app_gs_map_html_at(map, npc);
      let npc_c = list_find(
        tile_cs,
        (tile_c) => html_data_get(tile_c, "type") === "npc",
      );
      app_gs_walk_direction(player_c, player, npc);
      app_gs_walk_direction(npc_c, npc, player);
    }
  }
}
