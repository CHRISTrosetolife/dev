import { list_index_last } from "./list_index_last.mjs";
import { list_index } from "./list_index.mjs";
export function list_last_is(list, item) {
  return list_index(list, item) === list_index_last(list);
}
