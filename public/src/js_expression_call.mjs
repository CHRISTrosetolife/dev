import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_expression_call(fn_name) {
  let code_call = js_code_call(fn_name);
  let expression = js_parse_expression(code_call);
  return expression;
}
