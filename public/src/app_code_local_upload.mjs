import { object_property_set } from "./object_property_set.mjs";
import { each_object } from "./each_object.mjs";
import { app_code_local_files_path } from "./app_code_local_files_path.mjs";
import { app_code_batch_name } from "./app_code_batch_name.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
export async function app_code_local_upload() {
  let batch_name = await app_code_batch_name();
  let s = await functions_source_get();
  let mapper = (contents, file_path) => {};
  let result = {};
  each_object(s, (file_path, contents) => {
    object_property_set(object, "property_name", value);
  });
  await storage_upload_object(app_code_local_files_path(batch_name), s);
}
