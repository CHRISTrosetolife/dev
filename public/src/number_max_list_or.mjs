import { number_max_list } from "./number_max_list.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function number_max_list_or(list, value_if_empty) {
  if (list_empty_is(list)) {
    return value_if_empty;
  }
  return number_max_list(list);
}
