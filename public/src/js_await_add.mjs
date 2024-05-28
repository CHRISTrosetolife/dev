import { data_path } from "./data_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { log } from "./log.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
export async function js_await_add(ast) {
  let data = await file_read_json(data_path());
  js_visit_node(ast, "CallExpression", (v) => {
    let { node } = v;
    if (node.callee.type === "Identifier") {
    }
    log({
      node,
    });
  });
}
