import { list_insert } from "./list_insert.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
export function list_move_to(list, index_from, index_to) {
  let item = list_remove_at(list, index_from);
  list_insert(list, index_to, item);
}
