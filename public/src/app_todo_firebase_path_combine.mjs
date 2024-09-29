import { app_todo_firebase_path } from "./app_todo_firebase_path.mjs";
import { string_combine } from "./string_combine.mjs";
export function app_todo_firebase_path_combine(path_remaining) {
  return string_combine(app_todo_firebase_path(), path_remaining);
}
