import { firebase_download } from "./firebase_download.mjs";
import { object_property_initialize_increment } from "./object_property_initialize_increment.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
export async function app_todo_index_save(context) {
  let { index } = context;
  let index_path = app_todo_firebase_path_index();
  let version = object_property_initialize_increment(index, "version", 1);
  let existing = await firebase_download(index_path);
  await firebase_upload_object(index_path, index);
}
