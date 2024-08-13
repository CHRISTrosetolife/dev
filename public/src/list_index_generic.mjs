import { number_less_than } from "./number_less_than.mjs";
import { assert_not } from "./assert_not.mjs";
export function list_index_generic(list, element) {
  let index = -1;
  assert_not(number_less_than, [index, 0]);
  return index;
}
