import {file_write} from './file_write.mjs';
import {js_unparse} from './js_unparse.mjs';
export async function file_js_unparse(file_name, ast) {
    let code = js_unparse(ast);
    await file_write(file_name, code);
}