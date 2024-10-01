import { string_index_last } from "./string_index_last.mjs";
import { firebase_download } from "./firebase_download.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_todo_firebase_path } from "./app_todo_firebase_path.mjs";
import { firebase_list } from "./firebase_list.mjs";
import { string_take } from "./string_take.mjs";
export async function firebase_storage_initialize(storage_path) {
  let index = string_index_last(storage_path, "/");
  string_take(storage_path, index + 1);
  let { items } = await firebase_list(app_todo_firebase_path());
  let full_paths = list_map_property(items, "fullPath");
  if (!list_includes(full_paths, storage_path)) {
    await firebase_upload_object(storage_path, {});
  }
  let object = await firebase_download(storage_path);
  return object;
}
