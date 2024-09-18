import { graph_neighbors_undirected } from "./graph_neighbors_undirected.mjs";
import { list_index } from "./list_index.mjs";
import { graph_path_shortest_neighbors } from "./graph_path_shortest_neighbors.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
export function graph_path_shortest(vertices, edge_lambda, from, to) {
  assert_arguments_length(arguments, 4);
  let neighbors_get = (v) => {
    let neighbors = graph_neighbors_undirected(edges, v);
    return neighbors;
  };
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
  return graph_path_shortest_neighbors(
    (v) => list_index(vertices, v),
    neighbors_get,
    from,
    [to],
  );
}
