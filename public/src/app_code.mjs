import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { app_code_save_get } from "./app_code_save_get.mjs";
import { app_code_refresh } from "./app_code_refresh.mjs";
import { global_get } from "./global_get.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
import { function_run_remote } from "./function_run_remote.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  let save = app_code_save_get();
  await object_property_initialize_get_async();
  let files = await function_run_remote(functions_source_get.name, []);
  let g = global_get();
  object_merge(g, {
    files,
  });
  await app_code_refresh(root);
}
