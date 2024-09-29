import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export async function js_node_if_declaration(node, lambda_inner) {
  if (js_node_type_is(node, "VariableDeclaration")) {
    let { declarations } = node;
    if (list_size_1(declarations)) {
      let d = list_single(declarations);
      await lambda_inner(d);
    }
  }
}
