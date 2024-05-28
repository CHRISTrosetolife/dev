import { object_property_get } from "./object_property_get.mjs";
import { data_path } from "./data_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function js_await_add(ast) {
  let data = await file_read_json(data_path());
  js_visit_node(ast, "CallExpression", (v) => {
    let { node } = v;
    let { callee } = node;
    if (callee.type === "Identifier") {
      let { name } = callee;
      let { functions } = data;
      if (object_property_exists(functions, name)) {
        let f = object_property_get(functions, name);
        let { async } = f;
        if (async) {
          let { parent } = v;
          log({
            v,
          });
        }
      }
    }
    log({
      node,
    });
  });
}
