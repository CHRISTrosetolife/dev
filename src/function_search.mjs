import {string_split_comma} from './string_split_comma.mjs';
import {function_names} from './function_names.mjs';
import {list_filter} from './list_filter.mjs';
import {function_name_to_parts} from './function_name_to_parts.mjs';
export async function function_search(query) {
    let terms = string_split_comma(query);
    let fn_names = await function_names();
    list_filter(fn_names, fn_name => {
        let fn_name_parts = function_name_to_parts(fn_name);
        for (let t of terms) {
            if (list_includes(fn_name_parts, t)) {
                
            }
        }
    })
}