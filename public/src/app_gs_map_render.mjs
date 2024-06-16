import { range_from } from "./range_from.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
import { html_remove } from "./html_remove.mjs";
import { each } from "./each.mjs";
import { app_gs_map_cell } from "./app_gs_map_cell.mjs";
import { floor } from "./floor.mjs";
import { ceiling } from "./ceiling.mjs";
import { number_max } from "./number_max.mjs";
import { game_tiles_max } from "./game_tiles_max.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export async function app_gs_map_render(
  map,
  map_c,
  coordinates,
  player_overlay,
) {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let limit = game_tiles_max();
  let tile_size_px = number_max(h, w) / limit;
  let w_tiles = ceiling(w / tile_size_px);
  let h_tiles = ceiling(h / tile_size_px);
  let w_extend = floor(w_tiles / 2);
  let h_extend = floor(h_tiles / 2);
  let tiles_new = {};
  await each_async(coordinates, async (c) => {
    let { x, y } = c;
    await each_async(range_from(y - h_extend, y + h_extend), async (ye) => {
      let rows_new = object_property_initialize(tiles_new, ye, {});
      let rows_old = object_property_initialize(map.html, ye, {});
      await each_async(range_from(x - w_extend, x + w_extend), async (xe) => {
        if (rows_new[xe]) {
          return;
        }
        if (rows_old[xe]) {
          return;
        }
        let tile = map.tiles[ye][xe];
        let component = await app_gs_map_cell(map, map_c, player_overlay, tile);
        tiles_new[xe] = component;
      });
    });
  });
  each(map.html, html_remove);
  list_remove_all(map.html);
  list_add_multiple(map.html, tiles_new);
  return tiles_new;
}
