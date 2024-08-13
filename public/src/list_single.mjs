import { list_single_message } from "./list_single_message.mjs";
import { json_to } from "./json_to.mjs";
export function list_single(list) {
  let message_get = () =>
    json_to({
      list,
    });
  return list_single_message(list, message_get);
}
