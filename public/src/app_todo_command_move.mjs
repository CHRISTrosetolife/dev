import { app_todo_command_move_transform } from "./app_todo_command_move_transform.mjs";
import { add_1_integer } from "./add_1_integer.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { app_todo_command_log } from "./app_todo_command_log.mjs";
import { app_todo_command_items_filter } from "./app_todo_command_items_filter.mjs";
import { app_todo_command_items } from "./app_todo_command_items.mjs";
export async function app_todo_command_move(index_from, index_to) {
  if (false) {
    index_to = add_1_integer(index_to);
  }
  let { filtered, items, index, index_path } = await app_todo_command_items();
  let transform = app_todo_command_move_transform(
    filtered,
    index_to,
    index_from,
    items,
  );
  filtered = app_todo_command_items_filter(items);
  await storage_upload_object(index, index_path);
  app_todo_command_log(filtered);
}
