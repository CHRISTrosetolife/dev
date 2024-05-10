import { js_parse_first } from "./js_parse_first.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_parse_expression(variable_name) {
  const identifier_code = js_code_statement(`(${variable_name})`);
  let parsed2 = js_parse_first(identifier_code);
  let { expression } = parsed2;
  return expression;
}
