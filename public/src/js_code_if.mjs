import { js_code_braces } from "./js_code_braces.mjs";
import { js_code_parenthesis } from "./js_code_parenthesis.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_code_if() {
  return string_combine_multiple([
    "if",
    js_code_parenthesis(false),
    js_code_braces(),
  ]);
}
