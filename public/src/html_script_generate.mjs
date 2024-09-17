import { html_code_generate_parent } from "./html_code_generate_parent.mjs";
import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
import { function_name_generated } from "./function_name_generated.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_code_generate } from "./html_code_generate.mjs";
export async function html_script_generate(name, input) {
  let fn_caller = html_script_generate;
  let body_string = await html_code_generate("script", input);
  let fn_new_name = string_combine_multiple([
    function_name_generated(html_script_generate),
    "_",
    name,
  ]);
  let open = false;
  await function_new_generic(
    fn_new_name,
    html_code_generate_parent(),
    body_string,
    open,
    [],
    false,
    file_write,
  );
  return function_names_to_lookup([fn_new_name]);
}
