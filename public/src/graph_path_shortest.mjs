import { graph_path_shortest_neighbors } from "./graph_path_shortest_neighbors.mjs";
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
  let neighbors_get = (v) => graph_neighbors(edges, v);
  return graph_path_shortest_neighbors(vertices, neighbors_get, from, to);
}
