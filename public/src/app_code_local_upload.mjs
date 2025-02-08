import { object_map } from "./object_map.mjs";
import { app_code_local_files_path } from "./app_code_local_files_path.mjs";
import { app_code_batch_name } from "./app_code_batch_name.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
export async function app_code_local_upload() {
  let s = await functions_source_get();
  let batch_name = await app_code_batch_name();
  let batch_path = app_code_local_files_path(batch_name);
  let files = object_map(s, (contents) => ({
    contents,
  }));
  await storage_upload_object(batch_path, {
    files,
  });
  let latest_path = app_code_local_files_path("latest");
  await storage_upload_object(latest_path, {
    batch_path,
  });
}
