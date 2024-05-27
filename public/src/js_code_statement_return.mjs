import { js_code_return } from "./js_code_return.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_return(a) {
  return js_code_statement(js_code_return(a));
}
