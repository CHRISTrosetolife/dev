import {file_overwrite} from './file_overwrite.mjs';
import {js_unparse} from './js_unparse.mjs';
import * as prettier from "prettier";
export async function file_js_unparse(file_name, ast) {
    let code = js_unparse(ast);
    let prettied = await prettier.format(code);
    await file_overwrite(file_name, prettied);
}
