import { list_filter } from "./list_filter.mjs";
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
export function app_gs_map_new() {
  let tiles_min = game_tiles_min();
  let border_thickness = floor(tiles_min / 2);
  let y_size = add(20, border_thickness * 2);
  let x_size = y_size;
  let map_overlays = [];
  let map = {
    overlays: map_overlays,
    rows: y_size,
    columns: x_size,
  };
  let total = y_size * x_size;
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
  let copy = list_filter(
    map.tiles,
    (t) => border_thickness <= t.x && t.x <= x_size - border_thickness,
  );
  list_shuffle(copy);
  each_range(map_overlays_count, (i) => {
    let t = list_pop(copy);
    let id = list_random_item(overlays);
    let o = {
      id,
    };
    object_merge_properties(o, t, ["x", "y"]);
    list_add(map_overlays, o);
  });
  map.player = {};
  map.player.y = floor(divide(subtract_1(map.y_size), 2));
  map.player.x = floor(divide(subtract_1(map.columns), 2));
  map.player.walk_offset = 0;
  map.player.walk_previous = 1;
  map.player.character = list_random_item(game_img_list_male());
  return map;
}
