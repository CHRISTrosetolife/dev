import { graph_neighbors_directed } from "./graph_neighbors_directed.mjs";
import { graph_path_shortest_generic } from "./graph_path_shortest_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function graph_path_shortest_directed(vertices, edge_lambda, from, to) {
  assert_arguments_length(arguments, 4);
  return graph_path_shortest_generic(
    vertices,
    edge_lambda,
    graph_neighbors_directed,
    from,
    to,
  );
}
