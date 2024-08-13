import { equal } from "./equal.mjs";
import { list_offset_by } from "./list_offset_by.mjs";
export function list_offset(list, item, offset) {
  return list_offset_by(list, item, offset, equal);
}
