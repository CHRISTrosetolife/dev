import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { log } from "./log.mjs";
import { function_names } from "./function_names.mjs";
import { function_run_remote } from "./function_run_remote.mjs";
import { html_scripts_load } from "./html_scripts_load.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_code() {
  let root = html_style_default_initialize();
  await html_scripts_load(root, ["axios", "acorn", "astring"]);
  let ns = await function_run_remote(function_names.name, []);
  each(ns, (item) => {
    let d = html_div(root);
    item;
  });
  log({
    ns,
  });
}
