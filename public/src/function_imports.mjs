import { function_name_to_file_name } from "./function_name_to_file_name.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
export async function function_imports(function_name) {
  let file_name = function_name_to_file_name(function_name);
  await file_js_parse();
  js_imports_existing();
}
