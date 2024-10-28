import { object_property_get_code } from "./object_property_get_code.mjs";
import { js_name_unique } from "./js_name_unique.mjs";
export function object_property_get_expression(
  ast,
  object_variable_name,
  property_name_code,
) {
  let object_variable_name_unique = js_name_unique(ast, object_variable_name);
  return object_property_get_code(
    object_variable_name_unique,
    property_name_code,
  );
}
