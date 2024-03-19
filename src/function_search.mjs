import {string_split_comma} from './string_split_comma.mjs';
import {function_names} from './function_names.mjs';
import {list_filter} from './list_filter.mjs';
export async function function_search(query) {
    let terms = string_split_comma(query);
    let fn_names = await function_names();
    list_filter(fn_names, fn_name => {
        let fn_name_parts = string_split(fn_name, '_');
        for (let t of terms) {
            if ()
        }
    })
}