import { app_gs_map_html_at_find } from "./app_gs_map_html_at_find.mjs";
import { html_button_width_full_text_click_back } from "./html_button_width_full_text_click_back.mjs";
import { app_gs_div_rounded_transparent } from "./app_gs_div_rounded_transparent.mjs";
import { app_gs_overlay_speech } from "./app_gs_overlay_speech.mjs";
import { app_gs_conversation } from "./app_gs_conversation.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_gs_sleep_time_face } from "./app_gs_sleep_time_face.mjs";
import { sleep } from "./sleep.mjs";
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
import { html_p_text } from "./html_p_text.mjs";
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
      }
    }
  } else {
    let { player } = context.game;
    if (player.pray.conversation === true) {
      player.pray.conversation = false;
      let neighbors = app_gs_map_neighbors_get(context.map, npc);
      let { path } = app_gs_map_path(context.map, neighbors);
      await app_gs_walk_path(map, map_c, player_c, path);
      let npc_c = app_gs_map_html_at_find(map, npc, "npc");
      let sleep_time = app_gs_sleep_time_face();
      await sleep(sleep_time);
      app_gs_walk_direction(player_c, player, npc);
      await sleep(sleep_time);
      app_gs_walk_direction(npc_c, npc, player);
      app_gs_conversation(map_c, map, npc);
    } else {
      let menu_overlay = app_gs_menu_overlay(map_c, map);
      let div_pray_reminder = app_gs_overlay_speech(menu_overlay);
      let div_pray_reminder_inner = app_gs_div_rounded_transparent(
        div_pray_reminder,
        "white",
        75,
      );
      html_p_text(
        div_pray_reminder_inner,
        "❗You remember you have not 🙏 prayed, yet, before your next conversation.",
      );
      html_button_width_full_text_click_back(div_pray_reminder, () => {
        html_remove(menu_overlay);
      });
    }
  }
}
