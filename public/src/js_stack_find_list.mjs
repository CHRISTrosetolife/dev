import { list_previous } from "./list_previous.mjs";
import { list_next } from "./list_next.mjs";
import { list_find_last } from "./list_find_last.mjs";
import { list_is } from "./list_is.mjs";
export function js_stack_find_list(stack) {
  let predicate = list_is;
  let list = list_find_last(stack, predicate);
  let item = list_next(stack, list);
  let current = list_previous(list, item);
  return {
    current,
    list,
    item,
  };
}
