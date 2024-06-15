import { sleep } from "./sleep.mjs";
import { promise_all } from "./promise_all.mjs";
import { app_gs_map_cell } from "./app_gs_map_cell.mjs";
import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
import { app_gs_map_html } from "./app_gs_map_html.mjs";
import { app_gs_overlay_player } from "./app_gs_overlay_player.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { list_map } from "./list_map.mjs";
export async function app_gs() {
  let root = app_gs_style_default_initialize();
  let map = app_gs_map_new();
  let map_c = app_gs_map_html(root, map);
  let player_overlay = app_gs_overlay_player(map_c, map);
  let tiles = list_map(map.tiles, async (tile) => {
    await app_gs_map_cell(map, map_c, player_overlay, tile);
  });
  await promise_all(tiles);
  await sleep(0);
  html_scroll_center_smooth(player_overlay);
}
