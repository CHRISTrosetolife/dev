import {file_js_parse} from "./file_js_parse.mjs";
import {js_identifier_rename} from "./js_identifier_rename.mjs";
import {file_js_unparse} from "./file_js_unparse.mjs";
export async function file_js_identifier_rename(file_path, identifier_from, identifier_to) {
  let lambda = js_identifier_rename
  let ast = await file_js_parse(file_path);
  js_identifier_rename(ast, identifier_from, identifier_to);
  await file_js_unparse(file_path, ast);
}


