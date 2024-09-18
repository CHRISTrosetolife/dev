import { each } from "./each.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export function js_template_to_function(ast) {
  return js_visit_node(ast, "TemplateLiteral", (v) => {
    let { node } = v;
    let { quasis } = node;
    let e = js_parse_expression(js_code_call_args(each.name, []));
    object_replace(node, e);
    object_replace(node);
    log(node);
  });
}
