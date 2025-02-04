import { storage_local_get } from "./storage_local_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
export async function app_code_refresh_function() {
  await html_load(async () => {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_function"),
    );
    let files = await app_code_files_get();
    let app_fn = object_property_get(context, "app_fn");
    storage_local_get(app_fn, "function_selected", value);
  });
}
