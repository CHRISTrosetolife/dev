import { app_code_files_get } from "./app_code_files_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_screen_set } from "./app_code_screen_set.mjs";
import { html_load } from "./html_load.mjs";
export async function app_code_refresh_function() {
  await html_load(async () => {
    let root = app_code_screen_set(
      context,
      fn_name("app_code_refresh_functions"),
    );
    let files = await app_code_files_get();
  });
}
