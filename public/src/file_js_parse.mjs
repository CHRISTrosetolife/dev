import { file_js_parse_code } from "./file_js_parse_code.mjs";
export async function file_js_parse(file_name) {
  let { ast } = await file_js_parse_code(file_name);
  let v = ast;
  return v;
}
