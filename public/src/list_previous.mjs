import { list_get } from "./list_get.mjs";
import { list_index_previous } from "./list_index_previous.mjs";
export function list_previous(list, item) {
  let previous_index = list_index_previous(list, item);
  let previous = list_get(list, previous_index);
  return previous;
}
