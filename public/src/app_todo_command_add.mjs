import { app_todo_item_add } from "./app_todo_item_add.mjs";
import { app_todo_command_transform } from "./app_todo_command_transform.mjs";
export async function app_todo_command_add(description) {
  let transform = (filtered, items) => app_todo_item_add(items, description);
  await app_todo_command_transform(transform);
}
