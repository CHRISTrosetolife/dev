import { html_span_text } from "./html_span_text.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { equal } from "./equal.mjs";
export function app_code_refresh_function_statement(parent, statement) {
  let { type } = statement;
  if (type === "ExpressionStatement") {
    let { expression } = statement;
    let { type: type_e } = expression;
    if (equal(type_e, "AwaitExpression")) {
      let { argument } = expression;
      html_span_text(parent, "⌛ ");
      app_code_refresh_function_statement(parent, argument);
    }
  }
  html_span_text(parent, js_unparse(statement));
}
