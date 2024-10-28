import { js_name_unique } from "./js_name_unique.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function object_property_get_expression(
  ast,
  object_variable_name,
  property_name_code,
) {
  let object_variable_name_unique = js_name_unique(ast, object_variable_name);
  return js_parse_expression(
    js_code_call_args(fn_name("object_property_get"), [
      object_variable_name_unique,
      property_name_code,
    ]),
  );
}
