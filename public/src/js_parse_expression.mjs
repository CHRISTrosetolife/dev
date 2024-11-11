import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_parse_expression(code) {
  let identifier_code = js_code_statement(
    string_combine_multiple(["(", code, ")"]),
  );
  let parsed2 = js_parse_first(identifier_code);
  let { expression } = parsed2;
  return expression;
}
