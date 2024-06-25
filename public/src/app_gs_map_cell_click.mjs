import { app_gs_map_cell_click_npc } from "./app_gs_map_cell_click_npc.mjs";
import { app_gs_save } from "./app_gs_save.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { null_is } from "./null_is.mjs";
import { app_gs_walk_path } from "./app_gs_walk_path.mjs";
import { app_gs_xy_equal } from "./app_gs_xy_equal.mjs";
import { app_gs_map_path } from "./app_gs_map_path.mjs";
import { app_gs_menu_main } from "./app_gs_menu_main.mjs";
import { app_gs_menu_overlay } from "./app_gs_menu_overlay.mjs";
import { app_gs_overlays_any_wall } from "./app_gs_overlays_any_wall.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function app_gs_map_cell_click(context, tile) {
  assert_arguments_length(arguments, 2);
  let npc = list_find_property_or(tile.overlays, "type", "npc", null);
  if (null_is(npc)) {
    let walls = app_gs_overlays_any_wall(tile);
    if (!walls) {
      let { path } = app_gs_map_path(context, [tile]);
      if (app_gs_xy_equal(context.game.player, tile)) {
        let menu_overlay = app_gs_menu_overlay(context);
        app_gs_menu_main(context, menu_overlay);
      } else {
        await app_gs_walk_path(context, path);
        app_gs_save(context);
      }
    }
  } else {
    await app_gs_map_cell_click_npc(context, npc);
  }
}
