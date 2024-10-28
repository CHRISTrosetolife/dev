import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { storage_files } from "./storage_files.mjs";
export async function app_todo_command() {
  let index_path = app_todo_firebase_path_index();
  let files = await storage_files(index_path);
}
