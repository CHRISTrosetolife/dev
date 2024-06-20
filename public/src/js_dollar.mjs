import { js_parse_first } from "./js_parse_first.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
export function js_dollar(ast) {
  js_visit_identifiers(ast, (v) => {
    let { node } = v;
    let { name } = node;
    let prefix = "$";
    if (string_starts_with(name, prefix)) {
      let remaining = string_prefix_without(name, prefix);
      if (remaining === "l") {
        let e = js_parse_expression("()=>{}");
        object_replace(node, e);
      }
      if (remaining === "lr") {
        let e = js_parse_expression("()=>{return;}");
        object_replace(node, e);
      }
      if (remaining === "lr") {
        let e = js_parse_first("return");
        let parent = v;
        object_replace(node, e);
      }
    }
  });
}
