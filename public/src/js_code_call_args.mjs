import {js_code_statement} from "./js_code_statement.mjs";
export function js_code_call(function_name) {
    let code = js_code_statement(`${function_name}()`);
    return code;
}
