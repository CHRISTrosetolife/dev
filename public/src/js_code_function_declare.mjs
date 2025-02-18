import { js_keyword_async } from "./js_keyword_async.mjs";
import { js_code_parenthesis } from "./js_code_parenthesis.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_function_declare(
  function_name,
  args_string,
  body_string,
  async_is,
) {
  let v = string_combine_multiple([
    async_is ? string_combine_multiple([js_keyword_async(), " "]) : "",
    "function ",
    function_name,
    js_code_parenthesis(args_string),
    " {\n  ",
    body_string,
    "\n}",
  ]);
  return v;
}
