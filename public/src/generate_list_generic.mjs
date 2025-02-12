import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
export async function generate_list_generic(delimited, name) {
  let r = js_code_statement_return(js_code_array(delimited));
  await function_new_generic(name, "", r, false, [], false, true);
}
