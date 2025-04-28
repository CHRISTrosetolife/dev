import { log } from "./log.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_first } from "./list_first.mjs";
export function js_node_type_first(ast, type) {
  let r = js_node_type(ast, type);
  let v = list_first(r);
  log(v);
}
