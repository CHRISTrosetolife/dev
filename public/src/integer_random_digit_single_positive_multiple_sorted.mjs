import { list_sort_map } from "./list_sort_map.mjs";
import { integer_random_digit_single_positive_multiple } from "./integer_random_digit_single_positive_multiple.mjs";
import { identity } from "./identity.mjs";
export function integer_random_digit_single_positive_multiple_sorted(count) {
  let values = integer_random_digit_single_positive_multiple(count);
  list_sort_map(values, identity);
  return values;
}
