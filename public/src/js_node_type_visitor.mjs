import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_visit } from "./js_visit.mjs";
export function js_node_type_visitor(ast, type) {
  return list_adder_unique((la) => {
    js_visit(ast, lambda);
    function lambda(v) {
      let { node } = v;
      let type_equal_is = node.type === type;
      if (type_equal_is) {
        la(v);
      }
    }
  });
}
