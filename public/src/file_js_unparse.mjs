import { file_js_unparse_code } from "./file_js_unparse_code.mjs";
export async function file_js_unparse(file_name, ast) {
  let before = null;
  let v = await file_js_unparse_code(ast, before, file_name);
  return v;
}
