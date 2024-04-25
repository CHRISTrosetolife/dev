import {js_empty_statements_remove} from "./js_empty_statements_remove.mjs";
import {file_js_parse} from "./file_js_parse.mjs";
import {file_js_unparse} from "./file_js_unparse.mjs";
export async function file_js_transform(lambda, file_path, args) {
    let ast = await file_js_parse(file_path);
    let result = await lambda(ast, ...args);
    js_empty_statements_remove(ast);
    await file_js_unparse(file_path, ast);
    return result;
}
