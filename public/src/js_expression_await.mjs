import { js_code_await } from "./js_code_await.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_expression_await(node) {
  let a = js_parse_expression(js_code_await("0"));
  a.argument = node;
  return a;
}
