import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_type_statement_block_is(body) {
  return js_node_type_is(body, "BlockStatement");
}
