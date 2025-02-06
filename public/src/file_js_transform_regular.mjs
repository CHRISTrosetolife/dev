import { file_js_unparse } from "./file_js_unparse.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
export async function file_js_transform_regular(file_path, lambda) {
  let ast = await file_js_parse(file_path);
  lambda(ast);
  await file_js_unparse(file_path, ast);
}
