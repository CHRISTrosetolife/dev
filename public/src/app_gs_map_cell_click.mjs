import { app_gs_map_path } from "./app_gs_map_path.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { app_gs_walk } from "./app_gs_walk.mjs";
import { list_skip } from "./list_skip.mjs";
import { each_async } from "./each_async.mjs";
import { app_gs_map_render } from "./app_gs_map_render.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { equal_by } from "./equal_by.mjs";
import { list_xy } from "./list_xy.mjs";
import { list_all } from "./list_all.mjs";
import { app_gs_map_neighbors_get } from "./app_gs_map_neighbors_get.mjs";
import { app_gs_overlays_any_wall } from "./app_gs_overlays_any_wall.mjs";
export async function app_gs_map_cell_click(map, map_c, player_c, tile) {
  let npc = list_find_property(tile.overlays, "type", "npc");
  if (npc) {
    let neighbors = app_gs_map_neighbors_get(map, npc);
  } else {
    let walls = app_gs_overlays_any_wall(tile);
    if (!walls) {
      let { path } = app_gs_map_path(map, [tile]);
      if (
        list_all(list_xy(), (xy) =>
          equal_by(map.player, tile, (coordinates) =>
            object_property_get(coordinates, xy),
          ),
        )
      ) {
        let menu_overlay = app_gs_menu_overlay(map_c, map);
        app_gs_menu_main(menu_overlay, map_c, map);
      } else {
        app_gs_map_render(map, map_c, path, player_c);
        await each_async(list_skip(path, 1), async (tile) => {
          await app_gs_walk(player_c, map.player, tile);
        });
        await html_scroll_center_smooth(player_c);
        app_gs_map_render(map, map_c, [map.player], player_c);
      }
    }
  }
}
