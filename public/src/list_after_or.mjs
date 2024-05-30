import { list_offset_generic } from "./list_offset_generic.mjs";
import { list_get_or } from "./list_get_or.mjs";
export function list_after_or(list, item, default_value) {
  let fn = (list, index) => list_get_or(list, index, default_value);
  return list_offset_generic(fn, list, item, offset);
  return after;
}
