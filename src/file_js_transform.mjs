import {file_js_parse} from "./file_js_parse.mjs";
import {file_js_unparse} from "./file_js_unparse.mjs";
export async function file_js_transform(lambda, file_path, identifier_from, identifier_to) {
    let ast = await file_js_parse(file_path);
    lambda(ast, identifier_from, identifier_to);
    await file_js_unparse(file_path, ast);
  }