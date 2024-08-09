import { fn_name } from "./fn_name.mjs";
import { html_code_generate } from "./html_code_generate.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_name_generated } from "./function_name_generated.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
export async function html_css_generate(name, html_css_code) {
  let body_string = await html_code_generate("link", html_css_code);
  let fn_name = string_combine_multiple([
    function_name_generated(html_css_generate),
    "_",
    name,
  ]);
  await function_new_generic(
    fn_name,
    "",
    body_string,
    false,
    [],
    false,
    file_overwrite,
  );
}
