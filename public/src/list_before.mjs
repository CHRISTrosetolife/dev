import { list_offset } from "./list_offset.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export function list_before(list, item) {
  let after = list_offset(list, item, subtract_1);
  return after;
}
