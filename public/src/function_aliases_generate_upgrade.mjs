import { js_visit_node } from "./js_visit_node.mjs";
import { log } from "./log.mjs";
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
          log({
            e,
          });
        });
      },
    ],
    [],
  );
}
