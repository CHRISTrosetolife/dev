import { list_index_change } from "./list_index_change.mjs";
import { add_1 } from "./add_1.mjs";
export function list_index_next(list, item) {
  return list_index_change(list, item, add_1);
}
