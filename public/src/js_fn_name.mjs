import { js_code_string } from "./js_code_string.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { function_exists } from "./function_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_fn_name(ast) {
  js_visit_node(ast, "MemberExpression", async (v) => {
    let { node } = v;
    let { object, property } = node;
    let r = false;
    each([object, property], (item) => {
      if (!js_node_type_is(item, "Identifier")) {
        r = true;
      }
    });
    if (object_property_get(property, "name") !== "name") {
      r = true;
    }
    let o_name = object_property_get(object, "name");
    if (!(await function_exists(o_name))) {
      r = true;
    }
    if (r) {
      return;
    }
    let e = js_code_call_args(fn_name.name, [js_code_string(o_name)]);
    let parsed = js_parse_expression(e);
  });
}
