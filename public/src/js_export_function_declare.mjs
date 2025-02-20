import { js_parse } from "./js_parse.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { js_code_export_function_declare } from "./js_code_export_function_declare.mjs";
export function js_export_function_declare(
  function_name,
  params_names,
  async_is,
) {
  let declare_code = js_code_export_function_declare(
    function_name,
    list_join_comma_space(params_names),
    "",
    async_is,
  );
  let ast = js_parse(declare_code);
  return ast;
}
