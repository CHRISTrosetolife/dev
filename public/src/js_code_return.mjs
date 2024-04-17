import {js_code_statement} from "./js_code_statement.mjs";
export function js_code_return(code) {
    return js_code_statement(`return ${code}`);
}
