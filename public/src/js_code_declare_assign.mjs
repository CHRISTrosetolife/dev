import {js_code_assign} from "./js_code_assign.mjs";
import {js_parse_first} from "./js_parse_first.mjs";
import {js_code_statement} from "./js_code_statement.mjs";
export function js_code_declare_assign(variable_name) {
    const value = `0`;
    const declare = js_code_assign(variable_name, value);
    const code = js_code_statement(`let ${declare}`);
    let parsed = js_parse_first(code);
    return parsed;
}
