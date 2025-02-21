import { js_code_string_empty } from "./js_code_string_empty.mjs";
import { js_value_string_set } from "./js_value_string_set.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_string(s) {
  let code2 = js_parse_expression(js_code_string_empty());
  js_value_string_set(code2, s);
  return code2;
}
