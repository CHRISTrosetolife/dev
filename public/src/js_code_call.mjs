import {js_code_statement} from "./js_code_statement.mjs";
export function js_code_call(function_name) {
    let import_code = js_code_statement(`${function_name}()`);
    return import_code;
}
