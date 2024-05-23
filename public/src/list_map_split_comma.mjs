import { string_split_comma } from "./string_split_comma.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_split_comma(skipped_pairs) {
  return list_map(skipped_pairs, (s) => string_split_comma(s));
}
