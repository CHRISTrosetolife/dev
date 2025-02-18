import { list_add_first } from "./list_add_first.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function list_move_to_beginning(list, param_index) {
  let item = list_remove_at(list, param_index);
  list_add_first(list, item);
}
