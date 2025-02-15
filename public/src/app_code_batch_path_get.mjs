import { app_code_data_get } from "./app_code_data_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_code_batch_path_get() {
  let data = await app_code_data_get();
  let batch_path = object_property_get(data, "batch_path");
  return batch_path;
}
