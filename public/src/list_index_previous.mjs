import { subtract_1 } from "./subtract_1.mjs";
import { list_index_change } from "./list_index_change.mjs";
export function list_index_next(list, item) {
  return list_index_change(list, item, subtract_1);
}
