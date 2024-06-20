import { list_remove } from "./list_remove.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { equal_json } from "./equal_json.mjs";
import { game_tiles_max } from "./game_tiles_max.mjs";
import { list_xy } from "./list_xy.mjs";
import { each } from "./each.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_partition } from "./list_partition.mjs";
import { list_all } from "./list_all.mjs";
import { add } from "./add.mjs";
import { app_gs_overlays_wall } from "./app_gs_overlays_wall.mjs";
import { game_img_list_male } from "./game_img_list_male.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { divide } from "./divide.mjs";
import { floor } from "./floor.mjs";
import { list_add } from "./list_add.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { each_range } from "./each_range.mjs";
import { list_adder } from "./list_adder.mjs";
import { range_from } from "./range_from.mjs";
import { list_concat } from "./list_concat.mjs";
import { ceiling } from "./ceiling.mjs";
import { object_merge_properties } from "./object_merge_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_gs_map_new() {
  let border_thickness = floor(game_tiles_max() / 2);
  let y_size_inside = 20;
  y_size_inside = 6;
  let x_size_inside = y_size_inside;
  let y_size = add(y_size_inside, border_thickness * 2);
  let x_size = add(x_size_inside, border_thickness * 2);
  let map = {
    y_size,
    x_size,
  };
  let total = x_size_inside * y_size_inside;
  let map_overlays_count = ceiling(total / 8);
  let overlays_wall = app_gs_overlays_wall();
  let overlays = list_concat(overlays_wall, range_from(48, 57));
  map.tiles = list_adder((lar) =>
    each_range(y_size, (y) => {
      let row = list_adder((lac) => {
        each_range(x_size, (x) => {
          let tile = {
            y,
            x,
            overlays: [],
          };
          let id = 0;
          object_merge(tile, {
            id,
          });
          lac(tile);
        });
      });
      lar(row);
    }),
  );
  let [inside, outside] = list_partition(
    list_concat_multiple(map.tiles),
    inside_is,
  );
  let spawn = {};
  spawn.x = floor(divide(subtract_1(map.x_size), 2));
  spawn.y = floor(divide(subtract_1(map.y_size), 2));
  let spawn_overlap = list_filter(inside, (i) =>
    equal_json(object_properties_new(i, list_xy()), spawn),
  );
  each(spawn_overlap, (s) => list_remove(inside, s));
  each(outside, (tile) => {
    let overlay_id = list_random_item(overlays_wall);
    let x_even = tile.x % 2 === 0;
    let y_even = tile.y % 2 === 0;
    if (x_even === y_even) {
      overlay_id = 32;
    } else {
      overlay_id = 33;
    }
    if (
      tile.y === border_thickness - 1 &&
      tile.x >= border_thickness &&
      tile.x <= border_thickness + x_size_inside - 1
    ) {
      if (x_even === y_even) {
        overlay_id = 17;
      } else {
        overlay_id = 16;
      }
    }
    if (
      tile.y === border_thickness + y_size_inside &&
      tile.x >= border_thickness &&
      tile.x <= border_thickness + x_size_inside - 1
    ) {
      if (x_even === y_even) {
        overlay_id = 8;
      } else {
        overlay_id = 9;
      }
    }
    if (
      tile.x === border_thickness + x_size_inside &&
      tile.y >= border_thickness &&
      tile.y <= border_thickness + y_size_inside - 1
    ) {
      if (x_even === y_even) {
        overlay_id = 17;
      } else {
        overlay_id = 9;
      }
    }
    overlay_add(tile, overlay_id);
  });
  list_shuffle(inside);
  each_range(map_overlays_count, (i) => {
    let tile = list_pop(inside);
    let id = list_random_item(overlays);
    overlay_add(tile, id);
  });
  map.player = {};
  object_merge(map.player, spawn);
  map.player.walk_offset = 0;
  map.player.walk_previous = 1;
  map.player.character = list_random_item(game_img_list_male());
  return map;
  function overlay_add(tile, id) {
    let o = {
      id,
    };
    object_merge_properties(o, tile, list_xy());
    list_add(tile.overlays, o);
  }
  function inside_is(t) {
    return list_all(
      [
        {
          xy: "x",
          size: x_size,
        },
        {
          xy: "y",
          size: y_size,
        },
      ],
      (a) =>
        border_thickness <= object_property_get(t, a.xy) &&
        object_property_get(t, a.xy) < a.size - border_thickness,
    );
  }
}
