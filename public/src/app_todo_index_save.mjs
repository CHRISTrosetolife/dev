import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_todo_firebase_path_index } from "./app_todo_firebase_path_index.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function app_todo_index_save(context) {
  let { index } = context;
  let index_path = app_todo_firebase_path_index();
  let property_name = "version";
  let initialize = 1;
  let value = object_property_initialize(index, property_name, initialize);
  value++;
  object_property_set(index, property_name, value);
  object_property_initialize(index, "version_previous", 0);
  await firebase_upload_object(index_path, index);
}
