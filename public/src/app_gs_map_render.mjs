import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { range_from } from "./range_from.mjs";
import { number_min_list } from "./number_min_list.mjs";
import { number_max_list } from "./number_max_list.mjs";
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
import { promise_all } from "./promise_all.mjs";
import { list_filter } from "./list_filter.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_adder } from "./list_adder.mjs";
export async function app_gs_map_render(
  map,
  map_c,
  coordinates,
  player_overlay,
) {
  let xs = list_map_property(coordinates, "x");
  let ys = list_map_property(coordinates, "y");
  let x_max = number_max_list(xs);
  let y_max = number_max_list(ys);
  let x_min = number_min_list(xs);
  let y_min = number_min_list(ys);
  let w = window.innerWidth;
  let h = window.innerHeight;
  let limit = game_tiles_max();
  let tile_size_px = number_max(h, w) / limit;
  let w_tiles = ceiling(w / tile_size_px);
  let h_tiles = ceiling(h / tile_size_px);
  let w_extend = floor(w_tiles / 2);
  let h_extend = floor(h_tiles / 2);
  let tiles_new = list_adder((la) =>
    list_map(map.tiles, async (tile) => {
      let d1 = number_min_list(
        list_map(range_from(x_min, x_max), (x) => abs(tile.x - x)),
      );
      let d2 = number_min_list(
        list_map(range_from(y_min, y_max), (y) => abs(tile.y - y)),
      );
      let visible = d1 <= w_extend && d2 <= h_extend;
      if (visible) {
        return await app_gs_map_cell(map, map_c, player_overlay, tile);
      }
    }),
  );
  tiles_new = await promise_all(tiles_new);
  tiles_new = list_filter(tiles_new, undefined_not_is);
  tiles_new = list_concat_multiple(tiles_new);
  each(map.html, html_remove);
  list_remove_all(map.html);
  list_add_multiple(map.html, tiles_new);
  return tiles_new;
}
