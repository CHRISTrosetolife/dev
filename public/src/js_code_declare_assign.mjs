import {js_parse_first} from "./js_parse_first.mjs";
import {js_code_statement} from "./js_code_statement.mjs";
export function js_code_declare_assign(variable_name) {
    const code = js_code_statement(`let ${`${variable_name} = 0`}`);
    let parsed = js_parse_first(code);
    return parsed;
}
