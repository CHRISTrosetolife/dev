import { js_code_decrement } from "./js_code_decrement.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_decrement(a) {
  return js_code_statement(js_code_decrement(a));
}
