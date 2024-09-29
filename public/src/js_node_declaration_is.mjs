import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_declaration_is(next, lambda_inner) {
  if (js_node_type_is(next, "VariableDeclaration")) {
    let { declarations } = next;
    if (list_size_1(declarations)) {
      let d = list_single(declarations);
      lambda_inner(d);
    }
  }
}
