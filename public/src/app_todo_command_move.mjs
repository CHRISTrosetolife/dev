import { list_get } from "./list_get.mjs";
import { app_todo_command_items } from "./app_todo_command_items.mjs";
export async function app_todo_command_move(index_from, index_to) {
  let { filtered, items } = await app_todo_command_items();
  let item_from = list_get(filtered, index_from);
  let item_to = list_get(filtered, index_to);
}
