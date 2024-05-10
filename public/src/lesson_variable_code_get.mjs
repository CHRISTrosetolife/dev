import { js_code_statement_let } from "./js_code_statement_let.mjs";
import { app_learn_code_log } from "./app_learn_code_log.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
export function lesson_variable_code_get(name, value) {
  return `${js_code_statement_let(name)}
${js_code_statement_assign(name, value)}
${app_learn_code_log(name)}`;
}
