import { function_run } from "./function_run.mjs";
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
  if (false) {
  }
  await function_run(f, [context]);
}
