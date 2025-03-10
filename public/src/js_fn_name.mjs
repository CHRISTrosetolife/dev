import { functions_names } from "./functions_names.mjs";
import { js_imports_remove } from "./js_imports_remove.mjs";
import { js_imports_add_specified } from "./js_imports_add_specified.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function js_fn_name(ast) {
  let fns = await functions_names();
  js_visit_node(ast, "MemberExpression", (v) => {
    let { node } = v;
    let { object, property } = node;
    let r = false;
    each([object, property], (item) => {
      if (!js_node_type_is(item, "Identifier")) {
        r = true;
      }
    });
    if (r) {
      return;
    }
    if (object_property_get(property, "name") !== "name") {
      return;
    }
    let o_name = object_property_get(object, "name");
    if (list_includes_not(fns, o_name)) {
      return;
    }
    let e = js_code_call_args(fn_name("fn_name"), [js_code_string(o_name)]);
    let parsed = js_parse_expression(e);
    object_replace(node, parsed);
    js_imports_add_specified(ast, [fn_name("fn_name")]);
    js_imports_remove(ast);
  });
}
