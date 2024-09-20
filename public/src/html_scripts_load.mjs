import { function_run_arg } from "./function_run_arg.mjs";
import { html_script_generate } from "./html_script_generate.mjs";
import { function_name_generated_combine } from "./function_name_generated_combine.mjs";
import { promise_all } from "./promise_all.mjs";
import { list_map } from "./list_map.mjs";
export async function html_scripts_load(root, scripts) {
  let mapped = list_map(scripts, async (script) => {
    let name = function_name_generated_combine(html_script_generate, script);
    await function_run_arg(name, root);
  });
  await promise_all(mapped);
}
