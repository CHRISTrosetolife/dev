import { object_property_set } from "./object_property_set.mjs";
import { js_name_unique } from "./js_name_unique.mjs";
import { string_combine } from "./string_combine.mjs";
import { js_declaration_single_name } from "./js_declaration_single_name.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_function_name_add(ast) {
  let name = js_declaration_single_name(ast);
  let prefix = string_combine(name, "_");
  js_visit_node(ast, "FunctionExpression", (v) => {
    let { node } = v;
    let u = js_name_unique(ast, prefix);
    let id = js_parse_expression(u);
    object_property_set(node, "id", id);
  });
}
