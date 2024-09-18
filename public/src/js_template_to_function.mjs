import { each_index } from "./each_index.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function js_template_to_function(ast) {
  return js_visit_node(ast, "TemplateLiteral", (v) => {
    let { node } = v;
    let { quasis } = node;
    log(node);
    each(quasis, log);
    each_index(quasis, (q, qi) => {});
    let e = js_parse_expression(
      js_code_call_args(string_combine_multiple.name, []),
    );
    let { arguments: a } = e;
    log({
      e,
    });
    return;
    object_replace(node, e);
    object_replace(node);
  });
}
