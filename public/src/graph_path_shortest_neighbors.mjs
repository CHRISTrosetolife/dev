import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_index } from "./list_index.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
export function graph_path_shortest_neighbors(
  vertices,
  neighbors_get,
  from,
  to,
) {
  let remaining = [
    {
      current: from,
      previous: null,
    },
  ];
  let visited = {};
  let result = null;
  let index = 0;
  while (index < list_size(remaining)) {
    let r = list_get(index);
    index++;
    let { current } = r;
    object_property_set(visited, list_index(vertices, current), r);
    if (current === to) {
      result = list_adder((la) => {
        let c = current;
        while (c !== null) {
          la(c);
          let i = list_index(vertices, c);
          let v = object_property_get(visited, i);
          c = v.previous;
        }
      });
      list_reverse(result);
      break;
    }
    let neighbors = neighbors_get(current);
    let neighbors_new = list_filter(
      neighbors,
      (n) =>
        object_property_exists_not(visited, list_index(vertices, n)) &&
        list_includes_not(remaining, n),
    );
    list_shuffle(neighbors_new);
    let mapped = list_map(neighbors_new, (n) => ({
      current: n,
      previous: current,
    }));
    list_add_multiple(remaining, mapped);
  }
  return result;
}
