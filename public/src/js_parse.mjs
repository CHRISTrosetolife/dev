import {js_parse_options} from "./js_parse_options.mjs";
let a = await import_or_get('acorn', 'acorn');
async function import_or_get(library_name_to_import, variable_name_to_get) {
    let a;
    if (typeof window === 'undefined') {
        a = await import(library_name_to_import);
    } else {
        a = eval(variable_name_to_get);
    }
    return a;
}

export function js_parse(code) {
    return a.parse(code, js_parse_options());
}
