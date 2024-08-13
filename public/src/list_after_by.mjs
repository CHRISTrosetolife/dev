import { list_offset } from "./list_offset.mjs";
import { add_1 } from "./add_1.mjs";
export function list_after_by(list, item) {
  let after = list_offset(list, item, add_1);
  return after;
}
