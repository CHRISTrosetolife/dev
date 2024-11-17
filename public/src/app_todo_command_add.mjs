import { app_todo_command_transform } from "./app_todo_command_transform.mjs";
import { app_todo_command_move_transform } from "./app_todo_command_move_transform.mjs";
export async function app_todo_command_add(index_from, index_to) {
  let transform = (filtered, items) =>
    app_todo_command_move_transform(filtered, index_to, index_from, items);
  await app_todo_command_transform(transform);
}
