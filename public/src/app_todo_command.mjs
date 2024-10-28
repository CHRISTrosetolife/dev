import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { app_todo_command_log } from "./app_todo_command_log.mjs";
import { app_todo_command_items } from "./app_todo_command_items.mjs";
export async function app_todo_command() {
  assert_arguments_length(arguments, 0);
  let { filtered } = await app_todo_command_items();
  app_todo_command_log(filtered);
}
