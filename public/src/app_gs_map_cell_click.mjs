import { html_style_rounded_padded } from "./html_style_rounded_padded.mjs";
import { html_style_background_color_black_alpha } from "./html_style_background_color_black_alpha.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_gs_sleep_time_face } from "./app_gs_sleep_time_face.mjs";
import { sleep } from "./sleep.mjs";
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
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
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
    let { player } = map;
    if (player.pray.conversation === true) {
      player.pray.conversation = false;
      let neighbors = app_gs_map_neighbors_get(map, npc);
      let { path } = app_gs_map_path(map, neighbors);
      await app_gs_walk_path(map, map_c, player_c, path);
      let tile_cs = app_gs_map_html_at(map, npc);
      let npc_c = list_find(
        tile_cs,
        (tile_c) => html_data_get(tile_c, "type") === "npc",
      );
      let sleep_time = app_gs_sleep_time_face();
      await sleep(sleep_time);
      app_gs_walk_direction(player_c, player, npc);
      await sleep(sleep_time);
      app_gs_walk_direction(npc_c, npc, player);
      let menu_overlay = app_gs_menu_overlay(map_c, map);
      let p = html_p_text(
        menu_overlay,
        string_combine_multiple([
          "👋 ",
          list_random_item(["Hello", "Hey", "Greetings", "Hi"]),
          ", ",
          map.player.name,
          "! ",
          list_random_item([
            "I am called",
            "My name is",
            "I go by",
            "They call me",
            "You can call me",
          ]),
          " ",
          npc.name,
          ". ",
          list_random_item([
            string_combine_multiple([
              "It is ",
              list_random_item(["so ", "very ", ""]),
              list_random_item(["wonderful", "nice"]),
            ]),
          ]),
          " to meet you!",
        ]),
      );
      html_style_background_color_black_alpha(p, 0.51);
      html_style_centered(p);
      html_style_rounded_padded(p);
      html_style_font_color(p, "white");
      html_button_width_full_text_click(
        menu_overlay,
        "👋 politely end the conversation after 🙏 praying",
        () => {
          html_remove(menu_overlay);
        },
      );
    } else {
      let menu_overlay = app_gs_menu_overlay(map_c, map);
      html_button_width_full_text_click(
        menu_overlay,
        "❗You remember you have not 🙏 prayed, yet, before your next conversation.",
        () => {
          html_remove(menu_overlay);
        },
      );
    }
  }
}
