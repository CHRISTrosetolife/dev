import { js_code_braces } from "./js_code_braces.mjs";
import { js_code_statement_let_assign } from "./js_code_statement_let_assign.mjs";
export function app_html_generate_global() {
  return js_code_statement_let_assign("global", js_code_braces());
}
