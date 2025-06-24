import { log } from "./log.mjs";
import { js_unparse_format } from "./js_unparse_format.mjs";
import { js_data } from "./js_data.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
export async function file_js_unparse_code(ast, file_path, before) {
  assert(js_node_is, [ast]);
  assert(string_is, [file_path]);
  let prettied = await js_unparse_format(ast);
  let result;
  if (prettied === before) {
    result = before;
  } else {
    await file_overwrite(file_path, prettied);
    await js_data(ast);
    log("");
    result = prettied;
  }
  let v = result;
  return v;
}
