import { object_property_initialize_increment } from "./object_property_initialize_increment.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
export async function app_todo_index_save(context) {
  let { index } = context;
  let index_path = app_todo_firebase_path_index();
  object_property_initialize_increment(index, "version", 1);
  await firebase_upload_object(index_path, index);
}
