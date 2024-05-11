import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_subtract_assign(a, b) {
  return js_code_statement(`${a} -= ${b}`);
}
