import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_node_type_visitor(ast, type) {
  return list_adder_unique((la) => {
    js_visit(ast, lambda);
    function lambda(v) {
      let { node } = v;
      if (!js_node_is(node)) {
        return;
      }
      let type_equal_is = js_node_type_is(node, type);
      if (type_equal_is) {
        la(v);
      }
    }
  });
}
