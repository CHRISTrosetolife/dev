import { list_multiple_is } from "./list_multiple_is.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
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
  parent = html_div(parent);
  if (border >= 1) {
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
      app_code_refresh_function_statement(parent, root, argument, border);
      return;
    }
    app_code_refresh_function_statement(parent, root, expression, border);
    return;
  } else if (equal(type, "CallExpression")) {
    let { callee } = statement;
    let { type: type_c } = callee;
    if (equal(type_c, "Identifier")) {
      let as = object_property_get(statement, "arguments");
      each(as, (item) => {
        app_code_refresh_function_statement(parent, root, item, border + 1);
      });
      let { name } = callee;
      app_code_save_refresh_function_button(parent, root, name);
      return;
    }
  } else if (equal(type, "VariableDeclaration")) {
    let { declarations } = statement;
    each(declarations, (item) => {
      app_code_refresh_function_statement(
        parent,
        root,
        item,
        list_multiple_is(declarations),
      );
    });
    return;
  } else if (equal(type, "VariableDeclarator")) {
    let { id, init } = statement;
    app_code_refresh_function_statement(parent, root, init, border);
    html_span_text(
      parent,
      string_combine_multiple(["➡️ ", object_property_get(id, "name")]),
    );
    return;
  } else {
  }
  app_code_source(parent, statement);
}
