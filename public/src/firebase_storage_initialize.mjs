import { firebase_download } from "./firebase_download.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_todo_firebase_path } from "./app_todo_firebase_path.mjs";
import { firebase_list } from "./firebase_list.mjs";
export async function firebase_storage_initialize(index_path) {
  let { items: firebase_items } = await firebase_list(app_todo_firebase_path());
  let full_paths = list_map_property(firebase_items, "fullPath");
  if (!list_includes(full_paths, index_path)) {
    await firebase_upload_object(index_path, {});
  }
  let index = await firebase_download(index_path);
  return index;
}
