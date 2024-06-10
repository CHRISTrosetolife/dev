import { js_parse_first } from "./js_parse_first.mjs";
import { js_code_declare_assign } from "./js_code_declare_assign.mjs";
export function js_code_declare_assign_0(variable_name) {
  let value = `0`;
  let code = js_code_declare_assign(variable_name, value);
  let parsed = js_parse_first(code);
  return parsed;
}
