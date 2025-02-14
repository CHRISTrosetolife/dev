import { log } from "./log.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_identifiers_scoped } from "./js_identifiers_scoped.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { function_declaration } from "./function_declaration.mjs";
export async function sandbox_5() {
  let d = await function_declaration(fn_name("sandbox_5"));
  js_visit(d, function (v) {
    let node = object_property_get(v, "node");
    let names = js_identifiers_scoped(v);
    if (js_node_is(node)) {
      log({
        node,
      });
      log({
        node: js_unparse(node),
        names,
      });
    }
  });
}
