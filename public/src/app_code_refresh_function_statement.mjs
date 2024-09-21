import { each } from "./each.mjs";
import { html_style_default_border_margin } from "./html_style_default_border_margin.mjs";
import { html_style_default_border_value } from "./html_style_default_border_value.mjs";
import { html_style } from "./html_style.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_source } from "./app_code_source.mjs";
import { app_code_save_refresh_function_button } from "./app_code_save_refresh_function_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
  } else if (equal(type, "CallExpression")) {
    let { callee } = statement;
    let { type: type_c } = callee;
    if (equal(type_c, "Identifier")) {
      let as = object_property_get(statement, "arguments");
      each(as, (item) => {
        app_code_refresh_function_statement(parent, root, item, true);
      });
      let { name } = callee;
      app_code_save_refresh_function_button(parent, root, name);
      return;
    }
  } else if (equal(type, "VariableDeclaration")) {
    let { declarations } = statement;
    each(declarations, (item) => {
      app_code_refresh_function_statement(parent, root, item, true);
    });
    return;
  } else if (equal(type, "VariableDeclarator")) {
    let { id, init } = statement;
    app_code_refresh_function_statement(parent, root, init, false);
    html_span_text(parent, object_property_get(object, "property_name"));
    return;
  }
  app_code_source(parent, statement);
}
