import { html_div } from "./html_div.mjs";
import { app_code_refresh_main } from "./app_code_refresh_main.mjs";
import { app_code_refresh_username } from "./app_code_refresh_username.mjs";
import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  let body = html_style_default_initialize();
  let root = html_div(body);
  await html_scripts_load(body, ["axios", "acorn", "astring"]);
  let context = {
    root,
  };
  if (storage_local_exists_not(app_code, "username")) {
    app_code_refresh_username(context);
  } else {
    await app_code_refresh_main(context);
  }
}
