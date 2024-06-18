import { performance_log } from "./performance_log.mjs";
import { performance_start } from "./performance_start.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { list_remove_first } from "./list_remove_first.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { graph_neighbors } from "./graph_neighbors.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_index } from "./list_index.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { performance_next } from "./performance_next.mjs";
export function graph_path_shortest(vertices, edge_lambda, from, to) {
  assert_arguments_length(arguments, 4);
  let p = performance_start();
  let edges = list_adder((la) =>
    each_index(vertices, (a, ai) =>
      each_index(vertices, (b, bi) => {
        if (bi <= ai) {
          return;
        }
        if (edge_lambda(a, b)) {
          la([a, b]);
        }
      }),
    ),
  );
  performance_next(p);
  let remaining = [
    {
      current: from,
      previous: null,
    },
  ];
  performance_next(p);
  let visited = {};
  performance_next(p);
  while (list_empty_not_is(remaining)) {
    let r = list_remove_first(remaining);
    let { current } = r;
    object_property_set(visited, list_index(vertices, current), r);
    if (current === to) {
      let path = list_adder((la) => {
        let c = current;
        while (c !== null) {
          la(c);
          let i = list_index(vertices, c);
          let v = object_property_get(visited, i);
          c = v.previous;
        }
      });
      list_reverse(path);
      performance_log(p);
      return path;
    }
    let neighbors = graph_neighbors(edges, current);
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
}
