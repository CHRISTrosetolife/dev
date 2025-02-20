import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
export async function generate_list_generic(delimited, name) {
  let r = js_code_statement_return(js_code_array(delimited));
  await function_new_generic_code(name, "", r, false, [], false, true);
}
