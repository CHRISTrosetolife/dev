import { list_index } from "./list_index.mjs";
export function list_offset_generic(fn, list, item, offset, lambda_equal) {
  let settings_index = list_index(list, item);
  let after = fn(list, offset(settings_index));
  return after;
}
