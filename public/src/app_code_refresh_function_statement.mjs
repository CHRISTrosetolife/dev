import { html_style_border_size } from "./html_style_border_size.mjs";
import { html_style_monospace } from "./html_style_monospace.mjs";
import { html_style_background_color } from "./html_style_background_color.mjs";
import { app_learn_code_style_code_color_background } from "./app_learn_code_style_code_color_background.mjs";
import { app_learn_code_style_code_color } from "./app_learn_code_style_code_color.mjs";
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
      html_span_text(parent, " (");
      let as = object_property_get(statement, "arguments");
      html_list(parent, list_map(as, js_unparse));
      html_span_text(parent, ")");
      return;
    }
  }
  let unparsed = js_unparse(statement);
  let s = html_span_text(parent, unparsed);
  html_style_monospace(s);
  html_style_background_color(
    parent,
    app_learn_code_style_code_color_background(),
  );
  html_style_border_size(parent);
  app_learn_code_style_code_color(s);
}
