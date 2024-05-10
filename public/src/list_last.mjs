import { list_index_last } from "./list_index_last.mjs";
import { list_get } from "./list_get.mjs";
export function list_last(list) {
  return list_get(list, list_index_last(list));
}
