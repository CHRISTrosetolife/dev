import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_call } from "./js_code_call.mjs";
export function js_expression_call(f_name) {
  let code_call = js_code_call(f_name);
  let expression = js_parse_expression(code_call);
  return expression;
}
