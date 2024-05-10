import { list_add } from "./list_add.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_call(fn_name, args) {
  let code_call = js_code_statement(js_code_call(fn_name));
  let call = js_parse_first(code_call);
  let { expression } = call;
  let { arguments: args2 } = expression;
  for (let a of args) {
    list_add(args2, a);
  }
  return call;
}
