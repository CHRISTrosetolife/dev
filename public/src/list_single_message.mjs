import { list_first } from "./list_first.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { assert_message } from "./assert_message.mjs";
export function list_single_message(list, message_get) {
  assert_message(list_size_1, [list], message_get);
  return list_first(list);
}
