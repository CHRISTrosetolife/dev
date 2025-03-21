import { file_js_unparse_code } from "./file_js_unparse_code.mjs";
import { file_js_parse_code } from "./file_js_parse_code.mjs";
export async function file_js_transform_regular(file_path, lambda) {
  let { ast, code } = await file_js_parse_code(file_path);
  lambda(ast);
  await file_js_unparse_code(ast, file_path, code);
}
