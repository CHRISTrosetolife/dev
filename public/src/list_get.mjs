import { list_size } from "./list_size.mjs";
import { assert_message } from "./assert_message.mjs";
import { number_less_than } from "./number_less_than.mjs";
export function list_get(list, index) {
  assert_message(number_less_than, [index, list_size(list)], () => list);
  return list[index];
}
