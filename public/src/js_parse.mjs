import {js_parse_options} from "./js_parse_options.mjs";
let a = await import_multi('acorn', 'acorn');
export function js_parse(code) {
    return a.parse(code, js_parse_options());
}
