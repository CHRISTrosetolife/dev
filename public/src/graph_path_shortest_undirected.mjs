import { graph_path_shortest_generic } from "./graph_path_shortest_generic.mjs";
import { graph_neighbors_undirected } from "./graph_neighbors_undirected.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function graph_path_shortest_undirected(
  vertices,
  edge_lambda,
  from,
  to,
) {
  assert_arguments_length(arguments, 4);
  let neighbors_lambda = graph_neighbors_undirected;
  return graph_path_shortest_generic(
    vertices,
    edge_lambda,
    neighbors_lambda,
    from,
    to,
  );
}
