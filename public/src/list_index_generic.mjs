import { each_index } from "./each_index.mjs";
import { number_less_than } from "./number_less_than.mjs";
import { assert_not } from "./assert_not.mjs";
export function list_index_generic(list, element, lambda_equal) {
  let index = -1;
  each_index(list, (candidate, candidate_index) => {
    if (lambda_equal(candidate, element)) {
      index = candidate_index;
      return true;
    }
  });
  assert_not(number_less_than, [index, 0]);
  return index;
}
