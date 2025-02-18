import { js_code_parenthesis } from "./js_code_parenthesis.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_function_declare(
  function_name,
  args_string,
  body_string,
  async_is,
) {
  return string_combine_multiple([
    "function ",
    function_name,
    js_code_parenthesis(args_string),
    " {\n  ",
    body_string,
    "\n}",
  ]);
}
