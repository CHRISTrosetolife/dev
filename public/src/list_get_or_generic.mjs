import { list_get } from "./list_get.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { greater_than } from "./greater_than.mjs";
export function list_get_or_generic(fn, list, index) {
  let result;
  if (greater_than(index, list_index_last(list))) {
    result = fn(list);
  } else {
    result = list_get(list, index);
  }
  return result;
}
