import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { js_code_assign } from "./js_code_assign.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
export function js_code_declare_assign(variable_name) {
  let value = `0`;
  let declare = js_code_assign(variable_name, value);
  let code = js_code_statement_let(declare);
  let parsed = js_parse_first(code);
  return parsed;
}
