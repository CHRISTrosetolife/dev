import { list_join } from "./list_join.mjs";
import { js_code_assign } from "./js_code_assign.mjs";
import { js_code_statement_let } from "./js_code_statement_let.mjs";
export function js_code_statement_let_assign_2(name_a, a, name_b, b) {
  return js_code_statement_let(
    list_join([js_code_assign(name_a, a), js_code_assign(name_b, b)], ", "),
  );
}
