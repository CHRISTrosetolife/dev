import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_code_generate } from "./html_code_generate.mjs";
export async function html_code_generate_script(function_name_suffix, input) {
  let function_name = string_combine_multiple([
    "html_script_",
    function_name_suffix,
  ]);
  let code = await html_code_generate("script", input, function_name);
}
