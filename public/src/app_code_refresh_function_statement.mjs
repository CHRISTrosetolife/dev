import { log } from "./log.mjs";
import { html_style_default_border_margin } from "./html_style_default_border_margin.mjs";
import { html_style_default_border_value } from "./html_style_default_border_value.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_source } from "./app_code_source.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { equal } from "./equal.mjs";
export function app_code_refresh_function_statement(
  parent,
  root,
  statement,
  border,
) {
  if (border) {
    parent = html_div(parent);
    html_style(parent, html_style_default_border_margin({}));
    html_style(parent, html_style_default_border_value("lightblue"));
  }
  let { type } = statement;
  if (type === "ExpressionStatement") {
    let { expression } = statement;
    let { type: type_e } = expression;
    if (equal(type_e, "AwaitExpression")) {
      let { argument } = expression;
      html_span_text(parent, "⌛ ");
      app_code_refresh_function_statement(parent, root, argument, false);
      return;
    }
    app_code_refresh_function_statement(parent, root, expression, false);
    return;
  } else if (type === "VariableDeclaration") {
    log({
      statement,
    });
  }
  app_code_source(parent, statement);
}
