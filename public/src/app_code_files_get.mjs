import { object_map_property } from "./object_map_property.mjs";
import { global_files } from "./global_files.mjs";
import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { global_get } from "./global_get.mjs";
import { app_code_data_get } from "./app_code_data_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_code_files_get() {
  let g = global_get();
  let files = await object_property_initialize_get_async(
    g,
    global_files(),
    async function () {
      let data = await app_code_data_get();
      let batch2 = object_property_get(data, "batch");
      let files2 = object_property_get(batch2, "files");$ag
      let property_name = "contents";
      let v = object_map_property(files2, property_name);
      return v;
    },
  );
  return files;