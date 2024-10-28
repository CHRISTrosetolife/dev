import { add_1 } from "./add_1.mjs";
import { app_todo_command_log } from "./app_todo_command_log.mjs";
import { app_todo_command_items_filter } from "./app_todo_command_items_filter.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_index } from "./list_index.mjs";
import { list_get } from "./list_get.mjs";
import { app_todo_command_items } from "./app_todo_command_items.mjs";
import { list_size } from "./list_size.mjs";
export async function app_todo_command_move(index_from, index_to) {
  index_to = number_to(index_to);
  index_to = add_1(index_to);
  let { filtered, items } = await app_todo_command_items();
  let filtered_size = list_size(filtered);
  let item_from = list_get(filtered, index_from);
  let items_index_from = list_index(items, item_from);
  list_remove_at(items, items_index_from);
  let items_index_to;
  if (index_to === filtered_size) {
    items_index_to = list_size(items);
  } else {
    let item_to = list_get(filtered, index_to);
    items_index_to = list_index(items, item_to);
  }
  list_insert(items, items_index_to, item_from);
  filtered = app_todo_command_items_filter(items);
  app_todo_command_log(filtered);
}
