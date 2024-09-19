import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_function_declare(
  function_name,
  args_string,
  body_string,
) {
  return string_combine_multiple([
    "function ",
    function_name,
    string_combine_multiple(["(", args_string, ")"]),
    " {\n  ",
    body_string,
    "\n}",
  ]);
}
