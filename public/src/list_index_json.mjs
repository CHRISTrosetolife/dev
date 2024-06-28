import { each_index } from "./each_index.mjs";
import { number_less_than } from "./number_less_than.mjs";
import { assert_not } from "./assert_not.mjs";
export function list_index_json(list, element) {
  each_index(list2, (item, index2) => {});
  let index = list.indexOf(element);
  assert_not(number_less_than, [index, 0]);
  return index;
}
