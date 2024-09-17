import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { js_imports_existing } from "./js_imports_existing.mjs";
export async function function_imports(function_name) {
  let file_name = function_name_to_path(function_name);
  let ast = await file_js_parse(file_name);
  let imports = js_imports_existing(ast);
}
