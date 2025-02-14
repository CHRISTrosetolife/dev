import { todo } from "./todo.mjs";
import { visit } from "./visit.mjs";
import { object_values } from "./object_values.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_is } from "./list_is.mjs";
import { null_is } from "./null_is.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function js_visit(ast, lambda) {
  todo("maybe visiting root should happen inside visit");
  lambda(ast);
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
      let v3 = !null_is(n) && !undefined_is(n);
      return v3;
    },
    lambda,
    [],
  );
}
