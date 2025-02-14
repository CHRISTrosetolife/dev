import { js_node_is } from "./js_node_is.mjs";
import { assert } from "./assert.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_visit } from "./js_visit.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_sort } from "./list_sort.mjs";
export function js_node_types(ast) {
  assert_arguments_length(arguments, 1);
  assert(js_node_is, [ast]);
  let v2 = list_adder_unique(function (la) {
    js_visit(ast, lambda);
    function lambda(v) {
      let { node } = v;
      let { type } = node;
      if (undefined_not_is(type)) {
        la(type);
      }
    }
  });
  list_sort(v2);
  return v2;
}
