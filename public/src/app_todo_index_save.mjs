import { firebase_save } from "./firebase_save.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
export async function app_todo_index_save(context) {
  let { index } = context;
  let index_path = app_todo_firebase_path_index();
  await firebase_save(index, index_path);
}
