import { list_offset_by } from "./list_offset_by.mjs";
import { add_1 } from "./add_1.mjs";
export function list_after_by(list, item, lambda_equal) {
  let after = list_offset_by(list, item, add_1, lambda_equal);
  return after;
}
