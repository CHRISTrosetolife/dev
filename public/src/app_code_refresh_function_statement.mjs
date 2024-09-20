import { js_unparse } from "./js_unparse.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { equal } from "./equal.mjs";
export function app_code_refresh_function_statement(root, statement) {
  let { type } = statement;
  if (type === "ExpressionStatement") {
    let { expression } = statement;
    let { type: type_e } = expression;
    if (equal(type_e, "AwaitExpression")) {
      let { argument } = expression;
      return string_combine_multiple([
        "⌛ ",
        app_code_refresh_function_statement(argument),
      ]);
    }
  }
  return js_unparse(statement);
}
