import { js_code_assign } from "./js_code_assign.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
export function js_code_statement_let_assign(name, value) {
  return js_code_statement_let(js_code_assign(name, value));
}
