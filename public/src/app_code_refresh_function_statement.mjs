import { html_span_text } from "./html_span_text.mjs";
import { html_div } from "./html_div.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_code_refresh_function_statement(root, statement) {
  let { type } = statement;
  if (type === "ExpressionStatement") {
    let { expression } = statement;
    let { type: type_e } = expression;
    if (equal(type_e, "AwaitExpression")) {
      let { argument } = expression;
      html_div(root, "⌛ ");
      html_span_text(root, "⌛ ");
      app_code_refresh_function_statement(root, argument);
    }
  }
  html_div_text(root, js_unparse(statement));
}
