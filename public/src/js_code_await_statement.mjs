import { js_code_await } from "./js_code_await.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_await_statement(awaited_code) {
  return js_code_statement(js_code_await(awaited_code));
}
