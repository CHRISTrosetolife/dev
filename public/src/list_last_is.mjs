import { list_index_last_is } from "./list_index_last_is.mjs";
import { list_index } from "./list_index.mjs";
export function list_last_is(list, item) {
  let index = list_index(list, item);
  let v = list_index_last_is(index, list);
  return v;
}
