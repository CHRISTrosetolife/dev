import { function_name_combine } from "./function_name_combine.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_name_unique } from "./js_name_unique.mjs";
import { js_expression_call_args } from "./js_expression_call_args.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_for_to_each(ast) {
  let v2 = js_visit_node(ast, "ForOfStatement", function (v) {
    let { node } = v;
    let left = object_property_get(node, "left");
    if (js_node_type_not_is(left, "VariableDeclaration")) {
      return;
    }
    let declarations = object_property_get(left, "declarations");
    if (!list_size_1(declarations)) {
      return;
    }
    let d = list_single(declarations);
    let id = object_property_get(d, "id");
    if (js_node_type_not_is(id, "Identifier")) {
      return;
    }
    let right = object_property_get(node, "right");
    let body = object_property_get(node, "body");
    let lambda_name = js_name_unique(
      ast,
      function_name_combine("lambda", fn_name("each")),
    );
    log({
      d,
    });
    js_expression_call_args();
  });
  return v2;
}
