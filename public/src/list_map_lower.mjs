import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_lower(matches) {
  return list_map(matches, string_case_lower);
}
