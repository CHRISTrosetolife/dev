import { firebase_save } from "./firebase_save.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
export async function app_todo_index_save(context) {
  let index_path = app_todo_firebase_path_index();
  let { index } = context;
  await firebase_save(index_path, index);
}
