import { js_code_increment } from "./js_code_increment.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_increment(a) {
  return js_code_statement(js_code_increment(a));
}
