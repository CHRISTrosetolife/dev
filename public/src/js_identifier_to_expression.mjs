import {js_parse_expression} from "./js_parse_expression.mjs";
import {string_delimit} from "./string_delimit.mjs";
export function js_identifier_to_expression(key) {
    let {name: key_name} = key;
    let code_key_string = string_delimit(key_name);
    let key_string = js_parse_expression(code_key_string);
    return key_string;
}
