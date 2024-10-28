import { storage_file_download_force } from "./storage_file_download_force.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { log_list } from "./log_list.mjs";
import { app_todo_not_completed } from "./app_todo_not_completed.mjs";
import { app_todo_completed_property } from "./app_todo_completed_property.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { app_todo_items_object } from "./app_todo_items_object.mjs";
import { list_single } from "./list_single.mjs";
import { storage_file_download_path } from "./storage_file_download_path.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { storage_files } from "./storage_files.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function app_todo_command() {
  let index_path = app_todo_firebase_path_index();
  let files = await storage_files(index_path);
  let last = list_single(files);
  await storage_file_download_force(last);
  let path = storage_file_download_path(last);
  let index = await file_read_json(path);
  let items = app_todo_items_object(index);
  let filtered = list_filter_property(
    items,
    app_todo_completed_property(),
    app_todo_not_completed(),
  );
  let mapped = list_map_property(filtered, "name");
  let mapped2 = list_map_index(mapped, (item, index) =>
    string_combine_multiple([index, " ", item]),
  );
  log_list(mapped2);
}
