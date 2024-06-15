import { list_without } from "./list_without.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export function graph_neighbors(edges, v) {
  let filtered = list_filter(edges, (e) => list_includes(e, v));
  let mapped = list_map(filtered, (f) => list_without(f, v));
}
