import { graph_neighbors_generic } from "./graph_neighbors_generic.mjs";
import { list_includes } from "./list_includes.mjs";
export function graph_neighbors_undirected(edges, v) {
  let lambda_filter = (e) => list_includes(e, v);
  return graph_neighbors_generic(lambda_filter, edges, v);
}
