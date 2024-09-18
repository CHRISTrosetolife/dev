import { list_without } from "./list_without.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_single } from "./list_single.mjs";
export function graph_neighbors(edges, v) {
  let lambda_filter = (e) => list_includes(e, v);
  let filtered = list_filter(edges, lambda_filter);
  let mapped = list_map(filtered, (f) => list_without(f, v));
  let mapped2 = list_map(mapped, list_single);
  return mapped2;
}
