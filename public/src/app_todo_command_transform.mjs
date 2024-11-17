import { app_todo_command_log } from "./app_todo_command_log.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { app_todo_command_items_filter } from "./app_todo_command_items_filter.mjs";
import { app_todo_command_items } from "./app_todo_command_items.mjs";
export async function app_todo_command_transform(index_to, transform) {
  let { filtered, items, index, index_path } = await app_todo_command_items();
  transform(filtered, items);
  filtered = app_todo_command_items_filter(items);
  await storage_upload_object(index, index_path);
  app_todo_command_log(filtered);
  return index_to;
}
