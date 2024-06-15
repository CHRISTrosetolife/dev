import { list_partition } from "./list_partition.mjs";
import { list_all } from "./list_all.mjs";
import { add } from "./add.mjs";
import { list_random_index_weighted } from "./list_random_index_weighted.mjs";
import { game_grass_weight } from "./game_grass_weight.mjs";
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
import { game_tiles_min } from "./game_tiles_min.mjs";
import { object_merge_properties } from "./object_merge_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function app_gs_map_new() {
  let tiles_min = game_tiles_min();
  let border_thickness = floor(tiles_min / 2);
  let y_size_inside = 20;
  let y_size = add(y_size_inside, border_thickness * 2);
  let x_size = y_size;
  let map_overlays = [];
  let map = {
    overlays: map_overlays,
    y_size,
    x_size,
  };
  let total = y_size_inside * y_size_inside;
  let map_overlays_count = ceiling(total / 8);
  let overlays_wall = app_gs_overlays_wall();
  let overlays = list_concat(overlays_wall, range_from(48, 57));
  let grass = game_grass_weight();
  map.tiles = list_adder((la) =>
    each_range(y_size, (y) =>
      each_range(x_size, (x) => {
        let id = list_random_index_weighted(grass);
        la({
          y,
          x,
          id,
        });
      }),
    ),
  );
  let [inside, outside] = list_partition(map, function predicate(t) {
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
        object_property_get(t, a.xy) <= a.size - border_thickness,
    );
  });
  list_shuffle(inside);
  each_range(map_overlays_count, (i) => {
    let t = list_pop(inside);
    let id = list_random_item(overlays);
    let o = {
      id,
    };
    object_merge_properties(o, t, ["x", "y"]);
    list_add(map_overlays, o);
  });
  map.player = {};
  map.player.y = floor(divide(subtract_1(map.y_size), 2));
  map.player.x = floor(divide(subtract_1(map.x_size), 2));
  map.player.walk_offset = 0;
  map.player.walk_previous = 1;
  map.player.character = list_random_item(game_img_list_male());
  return map;
}
