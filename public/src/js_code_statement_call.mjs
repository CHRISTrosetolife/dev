import { js_code_call } from "./js_code_call.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_call(name) {
  return js_code_statement(js_code_call(name));
}
