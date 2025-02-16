import { app_code_data_get } from "./app_code_data_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_code_files_get() {
  let data = await app_code_data_get();
  let batch2 = object_property_get(data, "batch");
  let files2 = object_property_get(batch2, "files");
  return files2;
}
