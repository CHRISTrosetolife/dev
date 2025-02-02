import { list_pairs_to_lookup } from "./list_pairs_to_lookup.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function list_to_lookup_indices(filtered) {
  let pairs = list_map_index(filtered, (f, index) => [f, index]);
  let lookup = list_pairs_to_lookup(pairs);
  return lookup;
}
