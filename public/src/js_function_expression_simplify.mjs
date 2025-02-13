import { object_replace } from "./object_replace.mjs";
import { list_equal } from "./list_equal.mjs";
import { list_map_property_name } from "./list_map_property_name.mjs";
import { assert_list } from "./assert_list.mjs";
import { js_node_type_identifier_is } from "./js_node_type_identifier_is.mjs";
import { log } from "./log.mjs";
import { js_node_type_statement_block_is } from "./js_node_type_statement_block_is.mjs";
import { assert } from "./assert.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_all } from "./list_all.mjs";
export function js_function_expression_simplify(ast) {
  js_visit_node(ast, "FunctionExpression", (v) => {
    let { node } = v;
    log({
      node,
    });
    let params = object_property_get(node, "params");
    assert_list(js_node_type_identifier_is, params);
    let body = object_property_get(node, "body");
    assert(js_node_type_statement_block_is, [body]);
    let body2 = object_property_get(body, "body");
    if (list_size_1(body2)) {
      let f = list_first(body2);
      if (js_node_type_is(f, "ExpressionStatement")) {
        let expression = object_property_get(f, "expression");
        if (js_node_type_is(expression, "CallExpression")) {
          let arguments2 = object_property_get(expression, "arguments");
          if (list_all(arguments2, js_node_type_identifier_is)) {
            let names_params = list_map_property_name(params);
            let names_arguments2 = list_map_property_name(arguments2);
            if (list_equal(names_params, names_arguments2)) {
              let callee = object_property_get(expression, "callee");
              object_replace(node, callee);
            }
          }
        }
      }
    }
  });
}
