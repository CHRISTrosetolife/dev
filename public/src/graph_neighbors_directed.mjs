import { list_first } from "./list_first.mjs";
import { graph_neighbors_generic } from "./graph_neighbors_generic.mjs";
export function graph_neighbors_directed(edges, v) {
  let lambda_filter = (e) => list_first(e) === v;
  return graph_neighbors_generic(lambda_filter, edges, v);
}
