import {js_parse_first} from "./js_parse_first.mjs";
import {js_code_statement} from "./js_code_statement.mjs";
import {js_name_unique_v} from "./js_name_unique_v.mjs";
export function js_name_unique_v_parsed(ast) {
    let variable_name = js_name_unique_v(ast);
    const code = js_code_statement(`let ${variable_name} = 0`);
    let parsed = js_parse_first(code);
    return {
        parsed,
        variable_name
    };
}
