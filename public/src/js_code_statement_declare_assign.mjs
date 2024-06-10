import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_declare_assign(name, value) {
  return js_code_statement(js_code_declare_assign(name, value));
}
