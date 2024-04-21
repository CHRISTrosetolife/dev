import {js_name_unique} from "./js_name_unique.mjs";
export function js_name_unique_v(ast) {
    const prefix = 'v';
    let variable_name = js_name_unique(ast, prefix);
    return variable_name;
}
