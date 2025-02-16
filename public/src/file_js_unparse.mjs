import { todo } from "./todo.mjs";
import { file_js_unparse_code } from "./file_js_unparse_code.mjs";
export async function file_js_unparse(file_name, ast) {
  todo(
    "maybe this function should not exist to modify ast's and all code should use ",
    file_js_unparse_code,
    " so that file operations are only when there are changes",
  );
  let before = null;
  let v = await file_js_unparse_code(ast, file_name, before);
  return v;
}
