import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_call_args(function_name, args) {
  return js_code_statement(js_code_call_args(function_name, args));
}
