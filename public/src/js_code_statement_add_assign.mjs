import { js_code_add_assign } from "./js_code_add_assign.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_add_assign(a, b) {
  return js_code_statement(js_code_add_assign(a, b));
}
