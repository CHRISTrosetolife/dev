import { list_index_by } from "./list_index_by.mjs";
export function list_offset_generic(fn, list, item, offset, lambda_equal) {
  let settings_index = list_index_by(list, item, lambda_equal);
  let after = fn(list, offset(settings_index));
  return after;
}
