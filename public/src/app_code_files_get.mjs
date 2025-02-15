import { html_load } from "./html_load.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_code_local_files_path_latest } from "./app_code_local_files_path_latest.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { global_files } from "./global_files.mjs";
import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { global_get } from "./global_get.mjs";
export async function app_code_files_get() {
  let v2 = await html_load(async function () {
    let g = global_get();
    let files = await object_property_initialize_get_async(
      g,
      global_files(),
      async function () {
        let v = await http_storage_get(app_code_local_files_path_latest());
        let batch_path = object_property_get(v, "batch_path");
        let batch = await http_storage_get(batch_path);
        let files2 = object_property_get(batch, "files");
        return files2;
      },
    );
    return files;
  });
  return v2;
}
