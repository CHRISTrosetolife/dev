import { app_todo_main } from "./app_todo_main.mjs";
import { app_todo_index_save } from "./app_todo_index_save.mjs";
export async function app_todo_index_save_main(context) {
  await app_todo_index_save(context);
  app_todo_main(context);
}
