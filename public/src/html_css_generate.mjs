import { html_code_generate } from "./html_code_generate.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_name_generated } from "./function_name_generated.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
export async function html_css_generate(name, html_css_code) {
  await html_code_generate(tag_name, input);
  await function_new_generic(
    string_combine_multiple([
      function_name_generated(html_css_generate),
      "_",
      name,
    ]),
    "",
    js_code_statement_return(js_unparse(r)),
    false,
    [],
    false,
    file_overwrite,
  );
}
