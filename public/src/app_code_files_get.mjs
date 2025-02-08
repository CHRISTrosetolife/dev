import { object_property_get } from "./object_property_get.mjs";
import { app_code_local_files_path_latest } from "./app_code_local_files_path_latest.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { global_files } from "./global_files.mjs";
import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { global_get } from "./global_get.mjs";
export async function app_code_files_get() {
  let g = global_get();
  let files = await object_property_initialize_get_async(
    g,
    global_files(),
    async () => {
      let v = await http_storage_get(app_code_local_files_path_latest());
      let batch_path = object_property_get(v, "batch_path");
      return await http_storage_get(batch_path);
    },
  );
  return files;
}
