import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { each_index } from "./each_index.mjs";
export function app_contact_respond_choice(
  tokens,
  offset,
  outputs,
  choice_response,
  choice_tokens,
) {
  let match = true;
  let offset_next = null;
  each_index(choice_tokens, function (item, index) {
    if (list_index_is(tokens, offset + index)) {
      let current = list_get(tokens, index);
      if (item === current) {
        offset_next = index;
      } else {
        match = false;
      }
    } else {
      match = false;
    }
  });
  if (match) {
    offset += offset_next;
    list_add(outputs, choice_response);
  }
  return offset;
}
