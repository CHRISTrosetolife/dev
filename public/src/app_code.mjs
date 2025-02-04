import { storage_local_initialize } from "./storage_local_initialize.mjs";
import { function_run } from "./function_run.mjs";
import { html_div } from "./html_div.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  let body = html_style_default_initialize();
  let root = html_div(body);
  await html_scripts_load(body, ["axios", "acorn", "astring"]);
  let app_fn = app_code;
  let context = {
    root,
  };
  storage_local_initialize(app_fn, "screen", "main");
  await function_run(f, [context]);
}
