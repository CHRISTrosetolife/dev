import { list_remove_first } from "./list_remove_first.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_difference } from "./list_difference.mjs";
import { graph_neighbors } from "./graph_neighbors.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
export function graph_path_shortest(vertices, edge_lambda, from, to) {
  assert_arguments_length(arguments, 4);
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
  return list_adder((la) => {
    let remaining = [from];
    let visited = [];
    while (list_empty_not_is(remaining)) {
      let current = list_remove_first(remaining);
      la(current);
      if (current === to) {
        break;
      }
      let neighbors = graph_neighbors(edges, current);
      let neighbors_new = list_difference(neighbors, visited);
      list_add_multiple(remaining, neighbors_new);
    }
  });
}
