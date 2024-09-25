import { log } from "./log.mjs";
import { list_index } from "./list_index.mjs";
import { graph_path_shortest_neighbors } from "./graph_path_shortest_neighbors.mjs";
import { each_index } from "./each_index.mjs";
import { list_adder } from "./list_adder.mjs";
export function graph_path_shortest_generic(
  vertices,
  edge_lambda,
  neighbors_lambda,
  from,
  to,
) {
  let edges = list_adder((la) =>
    each_index(vertices, (a, ai) =>
      each_index(vertices, (b, bi) => {
        if (edge_lambda(a, b)) {
          la([a, b]);
        }
      }),
    ),
  );
  let neighbors_get = (v) => {
    let neighbors = neighbors_lambda(edges, v);
    log({
      v,
      neighbors,
      neighbors_lambda,
    });
    return neighbors;
  };
  return graph_path_shortest_neighbors(
    (v) => list_index(vertices, v),
    neighbors_get,
    from,
    [to],
  );
}
