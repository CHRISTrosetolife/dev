import { global_get } from "./global_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
import { function_run } from "./function_run.mjs";
export async function app_code_download() {
  let files = await function_run(functions_source_get.name, []);
  object_property_set(global_get(), "files", files);
}
