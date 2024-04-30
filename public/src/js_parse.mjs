import {js_parse_options} from "./js_parse_options.mjs";
let a;
if (typeof window === 'undefined') {
    a = await import('acorn');
} else {
    a = acorn;
}
export function js_parse(code) {
    return a.parse(code, js_parse_options());
}
