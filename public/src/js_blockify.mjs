import { object_replace } from "./object_replace.mjs";
import { object_copy_shallow } from "./object_copy_shallow.mjs";
import { js_block_statement } from "./js_block_statement.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_blockify(body) {
  if (!js_node_type_is(body, "BlockStatement")) {
    let wrapped = js_block_statement([object_copy_shallow(body)]);
    object_replace(body, wrapped);
  }
}
