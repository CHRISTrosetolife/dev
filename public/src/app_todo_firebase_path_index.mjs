import { app_firebase_path_index } from "./app_firebase_path_index.mjs";
import { app_todo_firebase_path_combine } from "./app_todo_firebase_path_combine.mjs";
export function app_todo_firebase_path_index() {
  let v = app_todo_firebase_path_combine(app_firebase_path_index());
  return v;
}
