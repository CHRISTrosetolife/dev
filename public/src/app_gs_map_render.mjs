import { game_tile_size_px } from "./game_tile_size_px.mjs";
import { log } from "./log.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { range_from } from "./range_from.mjs";
import { html_remove } from "./html_remove.mjs";
import { each } from "./each.mjs";
import { app_gs_map_cell } from "./app_gs_map_cell.mjs";
import { floor } from "./floor.mjs";
import { ceiling } from "./ceiling.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_gs_map_render(
  map,
  map_component,
  coordinates,
  player_overlay,
) {
  log({
    coordinates,
  });
  let w = window.innerWidth;
  let h = window.innerHeight;
  let tile_size_px = game_tile_size_px();
  let w_tiles = ceiling(w / tile_size_px);
  let h_tiles = ceiling(h / tile_size_px);
  let w_extend = floor(w_tiles / 2);
  let h_extend = floor(h_tiles / 2);
  let tiles_new = {};
  each(coordinates, (c) => {
    let { x, y } = c;
    each(range_from(y - h_extend, y + h_extend), (ye) => {
      let rows_new = object_property_initialize(tiles_new, ye, {});
      let rows_old = object_property_initialize(map.html, ye, {});
      each(range_from(x - w_extend, x + w_extend), (xe) => {
        if (object_property_exists(rows_new, xe)) {
          return;
        }
        if (object_property_exists(rows_old, xe)) {
          rows_new[xe] = rows_old[xe];
          return;
        }
        let tile = map.tiles[ye][xe];
        let components = app_gs_map_cell(
          map,
          map_component,
          player_overlay,
          tile,
        );
        rows_new[xe] = components;
      });
    });
  });
  log({
    tiles_new,
  });
  each_object(map.html, (hy, row) => {
    if (object_property_exists_not(tiles_new, hy)) {
      each_object(row, (hx, c) => each(c, html_remove));
      return;
    }
    let row_new = object_property_get(tiles_new, hy);
    each_object(row, (hx, c) => {
      if (object_property_exists_not(row_new, hx)) {
        each(c, html_remove);
      }
    });
  });
  map.html = tiles_new;
}
