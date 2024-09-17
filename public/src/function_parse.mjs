import { file_js_parse } from "./file_js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function function_parse(function_name) {
  let file_name = function_name_to_path(function_name);
  let ast = await file_js_parse(file_name);
  return ast;
}
