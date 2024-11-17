import { add_1_integer } from "./add_1_integer.mjs";
import { app_todo_command_transform } from "./app_todo_command_transform.mjs";
import { app_todo_command_move_transform } from "./app_todo_command_move_transform.mjs";
export async function app_todo_command_add(index_from, index_to) {
  if (false) {
    index_to = add_1_integer(index_to);
  }
  let transform = (filtered, items) =>
    app_todo_command_move_transform(filtered, index_to, index_from, items);
  await app_todo_command_transform(transform);
}
