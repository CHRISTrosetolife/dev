import { app_code_refresh_main } from "./app_code_refresh_main.mjs";
import { html_div } from "./html_div.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  let body = html_style_default_initialize();
  let root = html_div(body);
  await html_scripts_load(body, ["axios", "acorn", "astring"]);
  let context = {
    root,
  };
  app_code_refresh_main(context);
}
