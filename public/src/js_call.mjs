import { js_parse_expression } from "./js_parse_expression.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_call } from "./js_code_call.mjs";
export function js_call(fn_name, args) {
  let code_call = js_code_call(fn_name);
  let expression = js_parse_expression(code_call);
  let { arguments: args2 } = expression;
  for (let a of args) {
    list_add(args2, a);
  }
  return call;
}
