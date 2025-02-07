import { object_map } from "./object_map.mjs";
import { app_code_local_files_path } from "./app_code_local_files_path.mjs";
import { app_code_batch_name } from "./app_code_batch_name.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
export async function app_code_local_upload() {
  let batch_name = await app_code_batch_name();
  let s = await functions_source_get();
  let result = object_map(s, (contents, file_path) => ({
    contents,
  }));
  await storage_upload_object(app_code_local_files_path(batch_name), result);
}
