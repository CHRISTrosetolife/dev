import { app_save_change } from "./app_save_change.mjs";
import { log } from "./log.mjs";
import { functions_source_get } from "./functions_source_get.mjs";
import { function_run_remote } from "./function_run_remote.mjs";
import { object_property_initialize_get_async } from "./object_property_initialize_get_async.mjs";
import { app_code_refresh } from "./app_code_refresh.mjs";
import { global_get } from "./global_get.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { object_merge } from "./object_merge.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  app_save_change(app_code, async (save) => {
    await object_property_initialize_get_async(save, "files", async () => {
      log({});
      return await function_run_remote(functions_source_get.name, []);
    });
  });
  let g = global_get();
  object_merge(g, {
    files,
  });
  await app_code_refresh(root);
}
