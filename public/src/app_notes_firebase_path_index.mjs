import { app_firebase_path_index } from "./app_firebase_path_index.mjs";
import { path_join } from "./path_join.mjs";
export function app_notes_firebase_path_index() {
  return path_join(["notes", app_firebase_path_index()]);
}
