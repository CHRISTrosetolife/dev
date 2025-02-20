import { function_new_generic_ast } from "./function_new_generic_ast.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_import } from "./js_code_import.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join } from "./list_join.mjs";
import { newline } from "./newline.mjs";
import { js_parse } from "./js_parse.mjs";
export async function function_new_generic_code(
  function_name,
  args_string,
  body_string,
  open,
  imports,
  async_is,
  overwrite,
) {
  let contents_function = js_code_export_function_declare(
    function_name,
    args_string,
    body_string,
    async_is,
  );
  let mapped = list_map(imports, js_code_import);
  let concat = list_concat(mapped, [contents_function]);
  let contents = list_join(concat, newline());
  let ast = js_parse(contents);
  let v = await function_new_generic_ast(
    overwrite,
    function_name,
    ast,
    open,
    contents,
  );
  return v;
}
