import { log } from "./log.mjs";
import { undefined_not_is } from "./undefined_not_is.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_visit } from "./js_visit.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function js_node_types(ast) {
  log("here");
  assert_arguments_length(arguments, 1);
  return list_adder_unique((la) => {
    js_visit(ast, lambda);
    function lambda(v) {
      let { node } = v;
      let { type } = node;
      log({
        type,
      });
      if (undefined_not_is(type)) {
        la(type);
      }
    }
  });
}
