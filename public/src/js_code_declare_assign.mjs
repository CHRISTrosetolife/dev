import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { js_code_assign } from "./js_code_assign.mjs";
export function js_code_declare_assign(variable_name, value) {
  let declare = js_code_assign(variable_name, value);
  let code = js_code_statement_let(declare);
  return code;
}
