import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
export function list_lowerify(list) {
  list = list_map(list, string_case_lower);
  return list;
}
