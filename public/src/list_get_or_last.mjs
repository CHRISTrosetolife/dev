import { list_get_or_generic } from "./list_get_or_generic.mjs";
import { list_last } from "./list_last.mjs";
export function list_get_or_last(list, index) {
  let fn = list_last;
  return list_get_or_generic(fn, list, index);
}
