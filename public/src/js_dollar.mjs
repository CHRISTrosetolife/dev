import { js_code_braces } from "./js_code_braces.mjs";
import { log } from "./log.mjs";
import { js_code_brackets } from "./js_code_brackets.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { js_parse_first_function } from "./js_parse_first_function.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
export function js_dollar(ast) {
  js_visit_identifiers(ast, (v) => {
    let { node } = v;
    let { name } = node;
    let prefix = "$";
    if (string_starts_with(name, prefix)) {
      let remaining = string_prefix_without(name, prefix);
      let { parent } = v;
      if (remaining === "a") {
        let e = js_parse_expression("()=>{}");
        object_replace(node, e);
      }
      if (remaining === "ar") {
        let e = js_parse_expression("()=>{return;}");
        object_replace(node, e);
      }
      if (remaining === "r") {
        let e = js_parse_first_function("return");
        if (parent.type === "ExpressionStatement") {
          object_replace(parent, e);
        }
      }
      if (remaining === "l") {
        let e = js_parse_expression(
          js_code_call_args(log.name, [js_code_braces()]),
        );
        object_replace(node, e);
      }
      if (remaining === "lr") {
        let e = js_parse_expression(
          js_code_call_args(list_random_item.name, [js_code_brackets()]),
        );
        log({
          e,
          parent,
        });
      }
    }
  });
}
