import { js_dollar_expand } from "./js_dollar_expand.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export async function js_dollar_expand_await(e, ast, id, a, parent) {
  if (js_node_type_is(e, "AwaitExpression")) {
    let arg = object_property_get(e, "argument");
    await js_dollar_expand(ast, arg, id, a, parent);
  } else {
    await js_dollar_expand(ast, init, id, a, parent);
  }
}
