import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
import { html_remove } from "./html_remove.mjs";
import { each } from "./each.mjs";
import { app_gs_map_cell } from "./app_gs_map_cell.mjs";
import { abs } from "./abs.mjs";
import { list_map } from "./list_map.mjs";
import { floor } from "./floor.mjs";
import { ceiling } from "./ceiling.mjs";
import { number_max } from "./number_max.mjs";
import { game_tiles_max } from "./game_tiles_max.mjs";
import { log } from "./log.mjs";
export function app_gs_map_render(map, map_c, b, player_overlay) {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let limit = game_tiles_max();
  let tile_size_px = number_max(h, w) / limit;
  let w_tiles = ceiling(w / tile_size_px);
  let h_tiles = ceiling(h / tile_size_px);
  let w_extend = floor(w_tiles / 2);
  let h_extend = floor(h_tiles / 2);
  let tiles_new = list_map(map.tiles, async (tile) => {
    let visible =
      abs(tile.x - b.x) <= w_extend && abs(tile.y - b.y) <= h_extend;
    if (visible) {
      log("her");
      await app_gs_map_cell(map, map_c, player_overlay, tile);
    }
  });
  each(map.html, html_remove);
  list_remove_all(map.html);
  list_add_multiple(map.html, tiles_new);
  return tiles_new;
}
