import { log } from "./log.mjs";
import { list_single } from "./list_single.mjs";
import { list_without } from "./list_without.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
export function graph_neighbors_generic(lambda_filter, edges, v) {
  let filtered = list_filter(edges, lambda_filter);
  log({});
  let mapped = list_map(filtered, (f) => list_without(f, v));
  let mapped2 = list_map(mapped, list_single);
  return mapped2;
}
