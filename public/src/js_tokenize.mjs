import {js_parse_options} from "./js_parse_options.mjs";
import * as acorn from 'acorn';
export function js_parse(code) {
    return acorn.parse(code, js_parse_options());
}
