import { list_add_beginning } from "./list_add_beginning.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function list_move_to(list, param_index) {
  let item = list_remove_at(list, param_index);
  list_add_beginning(list, item);
}
