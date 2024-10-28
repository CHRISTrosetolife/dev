import { file_open } from "./file_open.mjs";
import { list_single } from "./list_single.mjs";
import { storage_file_download_path } from "./storage_file_download_path.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { storage_files } from "./storage_files.mjs";
export async function app_todo_command() {
  let index_path = app_todo_firebase_path_index();
  let files = await storage_files(index_path);
  let last = list_single(files);
  await storage_file_download(last);
  let path = storage_file_download_path(last);
  await file_open(path);
}
