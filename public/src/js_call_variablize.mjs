import { list_copy } from "./list_copy.mjs";
import { js_variablize } from "./js_variablize.mjs";
import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { js_node_type_visitor } from "./js_node_type_visitor.mjs";
import { list_includes } from "./list_includes.mjs";
import { each_index } from "./each_index.mjs";
export function js_call_variablize(ast) {
  let move_types = ["ArrayExpression"];
  let vs = js_node_type_visitor(ast, "CallExpression");
  for (let v of vs) {
    let { node } = v;
    let { stack } = v;
    let { arguments: args } = node;
    let copy = list_copy(args);
    each_index(copy, function (arg, arg_i) {
      let { type } = arg;
      if (list_includes(move_types, type)) {
        let ancestor = list_get_end(stack, 3);
        let { type: ancestor_type } = ancestor;
        if (equal(ancestor_type, "BlockStatement")) {
          let body = list_get_end(stack, 2);
          assert(list_is, [body]);
          let es = list_get_end(stack, 1);
          let { type: es_type } = es;
          assert(equal, [es_type, "ExpressionStatement"]);
          js_variablize(ast, body, es, arg);
        }
      }
    });
  }
}
