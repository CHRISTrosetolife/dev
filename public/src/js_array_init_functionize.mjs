import { fn_name } from "./fn_name.mjs";
import { js_call } from "./js_call.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { js_init_index_insert } from "./js_init_index_insert.mjs";
import { js_variable_declarators } from "./js_variable_declarators.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function js_array_init_functionize(ast) {
  let vs = js_variable_declarators(ast, "ArrayExpression");
  for (let v of vs) {
    let index_insert = js_init_index_insert(v, 1);
    let { node } = v;
    let { id } = node;
    let { init } = node;
    let { elements } = init;
    each_reverse(elements, function (e) {
      let call = js_call(fn_name("list_add"), [id, e]);
      let { stack } = v;
      let variable_declaration_parent = list_get_end(stack, 3);
      list_insert(variable_declaration_parent, index_insert, call);
    });
    let init_new = js_call(fn_name("object_new"), []);
    object_property_set(node, "init", init_new);
  }
}
