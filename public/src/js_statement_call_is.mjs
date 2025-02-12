import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_statement_call_is(node, f_name) {
  let result = false;
  if (js_node_type_is(node, "ExpressionStatement")) {
    let expression = object_property_get(node, "expression");
    if (js_node_type_is(expression, "CallExpression")) {
      let callee2 = object_property_get(expression, "callee");
      let name2 = object_property_get(callee2, "name");
      if (name2 === f_name) {
        result = true;
      }
    }
  }
  return result;
}
