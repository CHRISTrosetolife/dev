import { js_code_let } from "./js_code_let.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_let(declare) {
  return js_code_statement(js_code_let(declare));
}
