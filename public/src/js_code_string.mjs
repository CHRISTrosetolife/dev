import { js_value_string_set } from "./js_value_string_set.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_code_string(s) {
  let code = js_parse_expression(string_delimit(""));
  js_value_string_set(code, s);
  let unparsed = js_unparse(code);
  return unparsed;
}
