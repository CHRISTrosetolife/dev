import { js_code_function_declare } from "./js_code_function_declare.mjs";
export function js_code_export_function_declare(
  function_name,
  args_string,
  body_string,
  async_is,
) {
  let space = async_is ? ` async ` : " ";
  let declare = js_code_function_declare(
    function_name,
    args_string,
    body_string,
    false,
  );
  let contents_function = `export${space}${declare}`;
  return contents_function;
}
