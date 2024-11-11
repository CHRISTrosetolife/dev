import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_first } from "./list_first.mjs";
import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { js_node_types } from "./js_node_types.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
export async function function_aliases_generate_upgrade() {
  await function_transform_args_split_lambda(
    fn_name("function_aliases_generate"),
    [
      (ast) => {
        let t = js_node_types(ast);
        js_visit_node(ast, "CallExpression", (e) => {
          let node = object_property_get(e, "node");
          let callee = object_property_get(node, "callee");
          if (!js_node_type_is(callee, "Identifier")) {
            return;
          }
          let args = object_property_get(node, "arguments");
          let first = list_first(args);
          log({
            callee,
          });
          log({
            first,
          });
        });
      },
    ],
    [],
  );
}
