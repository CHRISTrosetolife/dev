import {js_parse_options} from "./js_parse_options.mjs";
let library_name = 'acorn';
let variable_name = 'acorn';
let a;
if (typeof window === 'undefined') {
    a = await import(library_name)
} else {
    a = eval(variable_name);
}
export function js_parse(code) {
    return a.parse(code, js_parse_options());
}
