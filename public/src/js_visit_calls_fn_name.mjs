import { js_node_type_literal_is } from "./js_node_type_literal_is.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit_calls } from "./js_visit_calls.mjs";
export function js_visit_calls_fn_name(ast, lambda) {
  js_visit_calls(ast, fn_name("fn_name"), function (args) {
    if (list_size_1(args)) {
      let arg = list_single(args);
      if (js_node_type_literal_is(arg)) {
        lambda(arg);
      }
    }
    lambda;
  });
}
