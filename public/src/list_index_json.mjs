import { equal_json } from "./equal_json.mjs";
import { each_index } from "./each_index.mjs";
import { number_less_than } from "./number_less_than.mjs";
import { assert_not } from "./assert_not.mjs";
export function list_index_json(list, element) {
  let result = -1;
  each_index(list, (item, index) => {
    if (equal_json(item, element)) {
      result = index;
      return true;
    }
  });
  let index = list.indexOf(element);
  assert_not(number_less_than, [index, 0]);
  return index;
}
