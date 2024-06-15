import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export function graph_neighbors(edges, v) {
  return list_filter(edges, (e) => list_includes(e, v));
}
