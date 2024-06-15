import { list_add } from "./list_add.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { each_range } from "./each_range.mjs";
import { list_adder } from "./list_adder.mjs";
import { range_from } from "./range_from.mjs";
import { list_concat } from "./list_concat.mjs";
import { ceiling } from "./ceiling.mjs";
import { number_max } from "./number_max.mjs";
import { game_tiles_min } from "./game_tiles_min.mjs";
export function map_new() {
  let tiles_min = game_tiles_min();
  let rows = number_max(20, tiles_min * 2);
  let columns = rows;
  let map_overlays = [];
  let map = {
    overlays: map_overlays,
    rows,
    columns,
  };
  let total = rows * columns;
  let map_overlays_count = ceiling(total / 8);
  let overlays = list_concat(range_from(40, 42), range_from(48, 57));
  let tiles = list_adder((la) =>
    each_range(rows, (y) =>
      each_range(columns, (x) =>
        la({
          y,
          x,
        }),
      ),
    ),
  );
  list_shuffle(tiles);
  each_range(map_overlays_count, (i) => {
    let t = list_pop(tiles);
    let id = list_random_item(overlays);
    let o = {
      id,
    };
    object_merge(o, t);
    list_add(map_overlays, o);
  });
  return map;
}
