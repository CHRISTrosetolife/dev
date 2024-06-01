import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { function_names } from "./function_names.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { data_path } from "./data_path.mjs";
import { object_properties } from "./object_properties.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_map } from "./list_map.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function functions_list_generate() {
  let name = "function_index";
  let d = await file_read_json(data_path());
  let { functions } = d;
  let function_names = object_properties(functions);
  let delimited = list_map(function_names, string_delimit);
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
