import { app_code_source } from "./app_code_source.mjs";
import { app_code_save_refresh_function_button } from "./app_code_save_refresh_function_button.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_list } from "./html_list.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_refresh_function_statement(parent, root, statement) {
  let { type } = statement;
  if (type === "ExpressionStatement") {
    let { expression } = statement;
    let { type: type_e } = expression;
    if (equal(type_e, "AwaitExpression")) {
      let { argument } = expression;
      html_span_text(parent, "⌛ ");
      app_code_refresh_function_statement(parent, root, argument);
      return;
    }
  } else if (equal(type, "CallExpression")) {
    let { callee } = statement;
    let { type: type_c } = callee;
    if (equal(type_c, "Identifier")) {
      let { name } = callee;
      app_code_save_refresh_function_button(parent, root, name);
      let as = object_property_get(statement, "arguments");
      html_list(parent, list_map(as, js_unparse));
      return;
    }
  }
  app_code_source(statement, parent);
}
