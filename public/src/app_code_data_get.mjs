import { global_function } from "./global_function.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_code_local_files_path_latest } from "./app_code_local_files_path_latest.mjs";
import { http_storage_get } from "./http_storage_get.mjs";
import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { html_load } from "./html_load.mjs";
export async function app_code_data_get() {
  let g = global_function(app_code_data_get);
  let data = await object_property_initialize_get_async(
    g,
    "data",
    async function () {
      let data = await html_load(async function () {
        let latest = await http_storage_get(app_code_local_files_path_latest());
        let batch_path = object_property_get(latest, "batch_path");
        let batch = await http_storage_get(batch_path);
        let data = {
          batch,
          batch_path,
        };
        return data;
      });
      return data;
    },
  );
  return data;
}
