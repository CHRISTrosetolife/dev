import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
export function graph_path_shortest_neighbors(id_get, neighbors_get, from, to) {
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
    let r = list_get(remaining, index);
    index++;
    let { current } = r;
    object_property_set(visited, id_get(current), r);
    if (current === to) {
      result = list_adder((la) => {
        let c = current;
        while (c !== null) {
          la(c);
          let i = id_get(c);
          let v = object_property_get(visited, i);
          c = v.previous;
        }
      });
      list_reverse(result);
      break;
    }
    let neighbors = neighbors_get(current);
    list_shuffle(neighbors);
    each(neighbors, (n) => {
      let en = object_property_exists_not(visited, id_get(n));
      let lin = list_includes_not(remaining, n);
      if (en && lin) {
        let m = {
          current: n,
          previous: current,
        };
        list_add(remaining, m);
      }
    });
  }
  return result;
}
