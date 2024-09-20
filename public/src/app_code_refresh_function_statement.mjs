import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_list } from "./html_list.mjs";
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
      return;
    }
  } else if (equal(type, "CallExpression")) {
    let { callee } = statement;
    let { type: type_c } = callee;
    if (equal(type_c, "Identifier")) {
      let { name } = callee;
      html_span_text(parent, name);
      let as = object_property_get(statement, "arguments");
      log({
        as,
      });
      html_list(as, js_unparse);
      return;
    }
  }
  html_span_text(parent, js_unparse(statement));
}
