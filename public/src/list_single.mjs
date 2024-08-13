import { assert_message } from "./assert_message.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
export function list_single(list) {
  assert_message(list_size_1, [list]);
  return list_first(list);
}
