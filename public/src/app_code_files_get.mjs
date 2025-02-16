import { app_code_local_files_path_latest } from "./app_code_local_files_path_latest.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { global_files } from "./global_files.mjs";
import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { global_get } from "./global_get.mjs";
import { html_load } from "./html_load.mjs";
import { app_code_data_get } from "./app_code_data_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_code_files_get() {
  let data = await app_code_data_get();
  let v = await html_load(async function () {
    let g = global_get();
    let data = await object_property_initialize_get_async(
      g,
      global_files(),
      async function () {
        let latest = await http_storage_get(app_code_local_files_path_latest());
        let batch_path = object_property_get(latest, "batch_path");
        let batch = await http_storage_get(batch_path);
        let data = {
          batch,
          batch_path,
        };
        return data;
      },
    );
    return data;
  });
  return v;
  let batch2 = object_property_get(data, "batch");
  let files2 = object_property_get(batch2, "files");
  return files2;
}
