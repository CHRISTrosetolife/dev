import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { function_parse } from "./function_parse.mjs";
export async function sandbox_5() {
  let ast = await function_parse(fn_name("sandbox_5"));
  log({
    ast,
  });
  js_visit(ast, function (v) {
    let node = object_property_get(v, "node");
    let names = js_identifiers_scoped(v);
    if (js_node_is(node)) {
      if (false) {
        log({
          node: js_unparse(node),
          names,
        });
      }
    }
  });
}
