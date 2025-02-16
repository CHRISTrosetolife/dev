import { js_data } from "./js_data.mjs";
import { js_code_format } from "./js_code_format.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function file_js_unparse(file_name, ast) {
  let before = null;
  let code = js_unparse(ast);
  let result;
  if (code !== before) {
    let prettied = await js_code_format(code);
    await file_overwrite(file_name, prettied);
    await js_data(ast);
    result = prettied;
  } else {
  }
  let v = result;
  return v;
}
