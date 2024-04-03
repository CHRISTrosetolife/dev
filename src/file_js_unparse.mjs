import {file_overwrite} from './file_overwrite.mjs';
import {js_unparse} from './js_unparse.mjs';
export async function file_js_unparse(file_name, ast) {
    let code = js_unparse(ast);
    console.log({
        code
    });
    await file_overwrite(file_name, code);
}
