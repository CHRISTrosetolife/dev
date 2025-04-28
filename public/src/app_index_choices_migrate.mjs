import { fn_name } from "./fn_name.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export async function app_index_choices_migrate() {
  await function_transform(fn_name("app_index_choices"), function (ast) {
    js_visit_node(ast, "ObjectExpression", function (v) {});
  });
}
