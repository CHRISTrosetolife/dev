import { js_value_string_set } from "./js_value_string_set.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_string(s) {
  let code2 = js_parse_expression(string_delimit(""));
  js_value_string_set(code2, s);
  return code2;
}
