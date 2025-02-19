import { list_is } from "./list_is.mjs";
import { object_values } from "./object_values.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { visit } from "./visit.mjs";
export function js_visit_generic(ast, filter, lambda) {
  visit(
    ast,
    function (n) {
      if (js_node_is(n)) {
        let v = object_values(n);
        return v;
      }
      if (list_is(n)) {
        return n;
      }
      let v2 = [];
      return v2;
    },
    function (n) {
      let v3 = js_node_is(n) || list_is(n);
      let v4 = v3 && filter(n);
      return v4;
    },
    lambda,
    [],
  );
}
