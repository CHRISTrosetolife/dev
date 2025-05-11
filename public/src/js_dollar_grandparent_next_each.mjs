import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_second } from "./list_second.mjs";
import { list_size_2 } from "./list_size_2.mjs";
import { fn_name } from "./fn_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_dollar_grandparent_next } from "./js_dollar_grandparent_next.mjs";
export async function js_dollar_grandparent_next_each(v, lambda_inner) {
  await js_dollar_grandparent_next(v, lambda);
  async function lambda(a) {
    let { next, s2 } = a;
    if (js_node_type_not_is(next, "ExpressionStatement")) {
      return;
    }
    let expression = object_property_get(next, "expression");
    if (js_node_type_is(expression, "AwaitExpression")) {
      expression = object_property_get(expression, "argument");
    }
    if (js_node_type_not_is(expression, "CallExpression")) {
      return;
    }
    let callee = object_property_get(expression, "callee");
    if (js_node_type_not_is(callee, "Identifier")) {
      return;
    }
    let name2 = object_property_get(callee, "name");
    if (
      list_includes_not(
        [fn_name("each"), fn_name("each_async"), fn_name("each_range")],
        name2,
      )
    ) {
      return;
    }
    let arguments2 = object_property_get(expression, "arguments");
    if (!list_size_2(arguments2)) {
      return;
    }
    let arg_second = list_second(arguments2);
    if (js_node_type_not_is(arg_second, "FunctionExpression")) {
      return;
    }
    lambda_inner(arg_second, callee);
    let { parent } = v;
    list_remove(s2, parent);
  }
}
