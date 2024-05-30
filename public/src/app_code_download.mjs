import { global_files_initialize } from "./global_files_initialize.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
import { function_run } from "./function_run.mjs";
export async function app_code_download() {
  let files = await function_run(functions_source_get.name, []);
  global_files_initialize(files);
}
