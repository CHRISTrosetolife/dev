import { file_overwrite } from "./file_overwrite.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { list_map } from "./list_map.mjs";
export async function generate_list_generic(list, name) {
  let delimited = list_map(list, string_delimit);
  await function_new_generic(
    name,
    "",
    js_code_statement_return(js_code_array(delimited)),
    false,
    [],
    false,
    file_overwrite,
  );
}
