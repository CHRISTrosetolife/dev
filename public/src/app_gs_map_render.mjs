import { game_tile_units_css } from "./game_tile_units_css.mjs";
import { html_style } from "./html_style.mjs";
import { app_gs_map_extends } from "./app_gs_map_extends.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { range_from } from "./range_from.mjs";
import { html_remove } from "./html_remove.mjs";
import { each } from "./each.mjs";
import { app_gs_map_cell } from "./app_gs_map_cell.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each_object } from "./each_object.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_gs_map_render(context, coordinates) {
  assert_arguments_length(arguments, 2);
  html_style(context.map_c, {
    width: game_tile_units_css(context.map.x_size),
    height: game_tile_units_css(context.map.y_size),
  });
  let { y_extend, x_extend } = app_gs_map_extends();
  let tiles_new = {};
  each(coordinates, (c) => {
    let { x, y } = c;
    each(range_from(y - y_extend, y + y_extend), (ye) => {
      let rows_new = object_property_initialize(tiles_new, ye, {});
      let rows_old = object_property_initialize(context.html, ye, {});
      each(range_from(x - x_extend, x + x_extend), (xe) => {
        if (object_property_exists(rows_new, xe)) {
          return;
        }
        if (object_property_exists(rows_old, xe)) {
          rows_new[xe] = rows_old[xe];
          return;
        }
        let tile = context.map.tiles[ye][xe];
        let components = app_gs_map_cell(context, tile);
        rows_new[xe] = components;
      });
    });
  });
  each_object(context.html, (hy, row) => {
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
  context.html = tiles_new;
}
