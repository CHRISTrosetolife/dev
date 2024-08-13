import { assert_message } from "./assert_message.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { json_to } from "./json_to.mjs";
export function list_single(list) {
  let message_get = () =>
    json_to({
      list,
    });
  assert_message(list_size_1, [list], message_get);
  return list_first(list);
}
