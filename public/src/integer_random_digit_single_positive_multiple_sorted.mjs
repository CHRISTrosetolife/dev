import { integer_random_digit_single_positive_multiple } from "./integer_random_digit_single_positive_multiple.mjs";
import { identity } from "./identity.mjs";
import { list_sort } from "./list_sort.mjs";
export function integer_random_digit_single_positive_multiple_sorted(count) {
  let values = integer_random_digit_single_positive_multiple(count);
  list_sort(values, identity);
  return values;
}
