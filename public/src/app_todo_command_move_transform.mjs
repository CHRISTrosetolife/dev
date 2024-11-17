import { list_insert } from "./list_insert.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_index } from "./list_index.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
export function app_todo_command_move_transform(
  filtered,
  index_to,
  index_from,
  items,
) {
  let filtered_size = list_size(filtered);
  let item_to;
  if (index_to < filtered_size) {
    item_to = list_get(filtered, index_to);
  }
  let item_from = list_get(filtered, index_from);
  let items_index_from = list_index(items, item_from);
  list_remove_at(items, items_index_from);
  let items_index_to;
  if (index_to >= filtered_size) {
    items_index_to = list_size(items);
  } else {
    items_index_to = list_index(items, item_to);
  }
  list_insert(items, items_index_to, item_from);
}
