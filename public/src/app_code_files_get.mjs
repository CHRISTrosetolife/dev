import { app_code_local_functions_path } from "./app_code_local_functions_path.mjs";
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
      return await http_storage_get(app_code_local_functions_path());
    },
  );
  return files;
}
