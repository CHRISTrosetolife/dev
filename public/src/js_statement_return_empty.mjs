import { js_parse_first_function } from "./js_parse_first_function.mjs";
import { js_code_statement_return_empty } from "./js_code_statement_return_empty.mjs";
export function js_statement_return_empty() {
  let r_code = js_code_statement_return_empty();
  let r = js_parse_first_function(r_code);
  return r;
}
