import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_code_function_declare } from "./js_code_function_declare.mjs";
export function js_code_export_function_declare(
  function_name,
  args_string,
  body_string,
  async_is,
) {
  let declare = js_code_function_declare(
    function_name,
    args_string,
    body_string,
    async_is,
  );
  let contents_function = string_combine_multiple(["export ", declare]);
  return contents_function;
}
