import {file_js_parse} from "./file_js_parse.mjs";
import {js_identifier_rename} from "./js_identifier_rename.mjs";
import {file_js_unparse} from "./file_js_unparse.mjs";
export async function file_js_identifier_rename(file_path, identifier_from, identifier_to) {
  let lambda = js_identifier_rename
  await file_js_transform(file_path, lambda, identifier_from, identifier_to);
}


async function file_js_transform(file_path, lambda, identifier_from, identifier_to) {
  let ast = await file_js_parse(file_path);
  lambda(ast, identifier_from, identifier_to);
  await file_js_unparse(file_path, ast);
}

