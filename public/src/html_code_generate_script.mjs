import { function_names_to_lookup } from "./function_names_to_lookup.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { html_code_generate_parent } from "./html_code_generate_parent.mjs";
import { html_css_generate } from "./html_css_generate.mjs";
import { function_name_generated } from "./function_name_generated.mjs";
import { file_write } from "./file_write.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_code_generate } from "./html_code_generate.mjs";
export async function html_code_generate_script(function_name_suffix, input) {
  let function_name = string_combine_multiple([
    "html_script_",
    function_name_suffix,
  ]);
  let code = await html_code_generate("script", input);
  let open = false;
  await function_new_generic(
    function_name,
    "",
    code,
    open,
    [],
    false,
    file_write,
  );
  return function_name;
  let body_string = await html_code_generate("link", html_css_code);
  let fn_new_name = string_combine_multiple([
    function_name_generated(html_css_generate),
    "_",
    name,
  ]);
  await function_new_generic(
    fn_new_name,
    html_code_generate_parent(),
    body_string,
    false,
    [],
    false,
    file_overwrite,
  );
  return function_names_to_lookup([fn_new_name]);
}
