import { js_expression_call } from "./js_expression_call.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
export function js_expression_call_args(fn_name, args) {
  let expression = js_expression_call(fn_name);
  let { arguments: args2 } = expression;
  for (let a of args) {
    list_add(args2, a);
  }
  return call;
}
