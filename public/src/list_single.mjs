import { fn_name } from "./fn_name.mjs";
import { list_single_message } from "./list_single_message.mjs";
import { json_to } from "./json_to.mjs";
export function list_single(list) {
  let message_get = () =>
    json_to({
      fn: fn_name("list_single"),
      list,
    });
  return list_single_message(list, message_get);
}
