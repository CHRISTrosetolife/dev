import {function_name_to_parts} from './function_name_to_parts.mjs';
export function function_search_terms_match(function_name, terms) {
    let fn_name_parts = function_name_to_parts(fn_name);
    for (let t of terms) {
        if (list_includes(fn_name_parts, t)) {
            
        }
    }
}