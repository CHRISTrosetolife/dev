import { function_run } from "./function_run.mjs";
import { log } from "./log.mjs";
import { html_script_generate } from "./html_script_generate.mjs";
import { function_name_generated_combine } from "./function_name_generated_combine.mjs";
import { each_async } from "./each_async.mjs";
export async function html_scripts_load(scripts, root) {
  await each_async([scripts], async (script) => {
    let name = function_name_generated_combine(html_script_generate, script);
    log({
      name,
    });
    await function_run(name, [root]);
  });
}
