import { list_index_is } from "./list_index_is.mjs";
import { list_get } from "./list_get.mjs";
export function list_get_or_generic(fn, list, index) {
  let result;
  if (list_index_is(list, index)) {
    result = list_get(list, index);
  } else {
    result = fn(list);
  }
  return result;
}
