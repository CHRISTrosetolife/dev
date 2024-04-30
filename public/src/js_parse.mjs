import {js_parse_options} from "./js_parse_options.mjs";
let acorn_imported;
if (typeof window === 'undefined') {
    acorn_imported = await import('acorn')
}
export function js_parse(code) {
    let a;
    if (typeof window === 'undefined') {
        a = acorn_imported;
    } else {
        a = acorn;
    }
    return a.parse(code, js_parse_options());
}
