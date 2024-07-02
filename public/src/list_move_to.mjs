import { list_insert } from "./list_insert.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function list_move_to(list, param_index) {
  let item = list_remove_at(list, param_index);
  list_insert(list, item);
}
