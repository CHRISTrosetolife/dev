import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { assert } from "./assert.mjs";
import { list_is } from "./list_is.mjs";
export function graph_path_shortest_neighbors(
  id_get,
  neighbors_get,
  from,
  to_any,
) {
  assert(list_is, [to_any]);
  let visited = {};
  let id = id_get(from);
  let r0 = {
    id,
    current: from,
    previous: null,
  };
  let remaining = [r0];
  object_property_set(visited, id, r0);
  let result = null;
  let index = 0;
  while (index < list_size(remaining)) {
    let r = list_get(remaining, index);
    index++;
    let { current } = r;
    let matches = list_filter(to_any, (to) => to === current);
    if (list_empty_not_is(matches)) {
      let path = list_adder((la) => {
        let c = r;
        while (c !== null) {
          la(c.current);
          let v = object_property_get(visited, c.id);
          c = v.previous;
        }
      });
      list_reverse(path);
      result = {
        path,
      };
      break;
    }
    let neighbors = neighbors_get(current);
    list_shuffle(neighbors);
    each(neighbors, (n) => {
      let id = id_get(n);
      let en = object_property_exists_not(visited, id);
      if (en) {
        let m = {
          id,
          current: n,
          previous: r,
        };
        list_add(remaining, m);
        object_property_set(visited, id, m);
      }
    });
  }
  return result;
}
