import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";
export async function file_js_parse(file_name) {
  let code = await file_read(file_name);
  let ast = js_parse(code);
  return ast;
}
