import {js_parse_options} from "./js_parse_options.mjs";
let a;
if (typeof window === 'undefined') {
    const library_name = 'acorn';
    a = await import(library_name)
} else {
    a = acorn;
}
export function js_parse(code) {
    return a.parse(code, js_parse_options());
}
