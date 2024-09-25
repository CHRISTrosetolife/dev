import { each } from "./each.mjs";
import { list_index } from "./list_index.mjs";
import { graph_path_shortest_neighbors } from "./graph_path_shortest_neighbors.mjs";
import { list_adder } from "./list_adder.mjs";
export function graph_path_shortest_generic(
  vertices,
  edge_lambda,
  neighbors_lambda,
  from,
  to,
) {
  let edges = list_adder((la) =>
    each(vertices, (a) =>
      each(vertices, (b) => {
        if (edge_lambda(a, b)) {
          la([a, b]);
        }
      }),
    ),
  );
  let neighbors_get = (v) => {
    let neighbors = neighbors_lambda(edges, v);
    return neighbors;
  };
  return graph_path_shortest_neighbors(
    (v) => list_index(vertices, v),
    neighbors_get,
    from,
    [to],
  );
}
