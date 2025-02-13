import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { js_node_type_statement_block_is } from "./js_node_type_statement_block_is.mjs";
import { object_replace } from "./object_replace.mjs";
import { object_copy_shallow } from "./object_copy_shallow.mjs";
import { js_block_statement } from "./js_block_statement.mjs";
export function js_blockify(body) {
  if (!js_node_type_statement_block_is(body)) {
    let r = js_code_statement_return();
    let wrapped = js_block_statement([object_copy_shallow(body)]);
    object_replace(body, wrapped);
  }
}
