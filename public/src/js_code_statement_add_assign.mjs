import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_statement_add_assign(a, b) {
  js_code_statement(`${a} += ${b}`);
}
