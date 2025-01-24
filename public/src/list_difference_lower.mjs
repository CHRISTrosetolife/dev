import { list_difference } from "./list_difference.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
export function list_difference_lower(firsts, c) {
  let c_lower = list_map(c, string_case_lower);
  let firsts_lower = list_map(firsts, string_case_lower);
  let filtered = list_difference(firsts_lower, c_lower);
  return filtered;
}
