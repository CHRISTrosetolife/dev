import { html_remove } from "./html_remove.mjs";
import { floor } from "./floor.mjs";
import { ceiling } from "./ceiling.mjs";
import { number_max } from "./number_max.mjs";
import { game_tiles_max } from "./game_tiles_max.mjs";
import { abs } from "./abs.mjs";
import { sleep } from "./sleep.mjs";
import { promise_all } from "./promise_all.mjs";
import { app_gs_map_cell } from "./app_gs_map_cell.mjs";
import { app_gs_style_default_initialize } from "./app_gs_style_default_initialize.mjs";
import { app_gs_map_html } from "./app_gs_map_html.mjs";
import { app_gs_overlay_player } from "./app_gs_overlay_player.mjs";
import { app_gs_map_new } from "./app_gs_map_new.mjs";
import { html_scroll_center_smooth } from "./html_scroll_center_smooth.mjs";
import { list_map } from "./list_map.mjs";
import { each } from "./each.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_gs() {
  let root = app_gs_style_default_initialize();
  let map = app_gs_map_new();
  let map_c = app_gs_map_html(root, map);
  let player_overlay = app_gs_overlay_player(map_c, map);
  let limit = game_tiles_max();
  let existing = [];
  let w = window.innerWidth;
  let h = window.innerHeight;
  let tile_size_px = number_max(h, w) / limit;
  let w_tiles = ceiling(w / tile_size_px);
  let h_tiles = ceiling(h / tile_size_px);
  let w_extend = floor(w_tiles / 2);
  let h_extend = floor(h_tiles / 2);
  let tiles_new = list_map(map.tiles, async (tile) => {
    let b = map.player;
    let visible =
      abs(tile.x - b.x) <= w_extend && abs(tile.y - b.y) <= h_extend;
    if (visible) {
      await app_gs_map_cell(map, map_c, player_overlay, tile);
    }
  });
  each(existing, html_remove);
  list_add_multiple(existing, tiles_new);
  await promise_all(tiles_new);
  await sleep(0);
  html_scroll_center_smooth(player_overlay);
}
