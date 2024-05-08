import {file_js_parse} from "./file_js_parse.mjs";
import {file_js_unparse} from "./file_js_unparse.mjs";
export async function file_json_transform(lambda, file_path, args) {
    let ast = await file_js_parse(file_path);
    let result = await lambda(ast, ...args);
    await file_js_unparse(file_path, ast);
    return result;
}
