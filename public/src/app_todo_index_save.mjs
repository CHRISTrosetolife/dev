import { firebase_save_index } from "./firebase_save_index.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
export async function app_todo_index_save(context) {
  let index_path = app_todo_firebase_path_index();
  await firebase_save_index(context, index_path);
}
