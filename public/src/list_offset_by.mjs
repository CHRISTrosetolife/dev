import { list_offset_generic } from "./list_offset_generic.mjs";
import { list_get } from "./list_get.mjs";
export function list_offset_by(list, item, offset, lambda_equal) {
  let fn = list_get;
  return list_offset_generic(fn, list, item, offset, lambda_equal);
}
