import { each_index } from "./each_index.mjs";
import { number_less_than } from "./number_less_than.mjs";
import { assert_not } from "./assert_not.mjs";
export function list_index_generic(list, element) {
  let index = -1;
  each_index(list, (item, candidate_index) => {
    if (lambda_equal(element)) {
    }
  });
  assert_not(number_less_than, [index, 0]);
  return index;
}
