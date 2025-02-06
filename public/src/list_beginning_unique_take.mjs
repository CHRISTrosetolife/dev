import { list_take_soft } from "./list_take_soft.mjs";
import { list_unique_json } from "./list_unique_json.mjs";
import { list_add_beginning } from "./list_add_beginning.mjs";
export function list_beginning_unique_take(list, item_new, limit) {
  list_add_beginning(list, item_new);
  list = list_unique_json(list);
  list = list_take_soft(list, limit);
  return list;
}
