import { js_expression_call } from "./js_expression_call.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function js_expression_call_args(fn_name, args) {
  let expression = js_expression_call(fn_name);
  let { arguments: args2 } = expression;
  list_add_multiple(args2, args);
  return expression;
}
